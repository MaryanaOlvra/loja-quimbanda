import axios from 'axios';

/**
 * Serviço responsável por calcular o frete em tempo real via API do Melhor Envio.
 * @param {string} destinationCep - CEP de destino informado pelo cliente (apenas números).
 * @param {Array} cartItems - Itens atuais presentes no carrinho do Zustand.
 */
export async function calculateShipping(destinationCep, cartItems) {
  try {
    // Validação básica do CEP
    const cleanCep = destinationCep.replace(/\D/g, '');
    if (cleanCep.length !== 8) {
      throw new Error('CEP inválido. O CEP deve conter 8 dígitos.');
    }

    // Configuração dos dados para a API do Melhor Envio
    // NOTA DE TECH LEAD: O token de acesso e o CEP de origem (loja) devem vir do .env ou painel administrativo.
    const payload = {
      from: {
        postal_code: "15010000" // Exemplo: CEP de São José do Rio Preto - SP (Templo)
      },
      to: {
        postal_code: cleanCep
      },
      products: cartItems.map(item => ({
        id: item.id,
        width: 11,   // Dimensões médias padrão de frascos/caixas de artigos religiosos
        height: 11,
        length: 16,
        weight: 0.5, // Peso estimado em kg por unidade
        insurance_value: item.price,
        quantity: item.quantity
      }))
    };

    // Chamada à API do Melhor Envio (Ambiente de homologação ou produção)
    // Para produção, substitua a URL base e insira o Bearer Token obtido no seu .env
    const response = await axios.post(
      'https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate',
      payload,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_MELHOR_ENVIO_TOKEN || 'SEU_TOKEN_AQUI'}`
        }
      }
    );

    // Filtra e retorna apenas as opções de frete úteis (ex: Correios SEDEX e PAC)
    const shippingOptions = response.data.filter(option => !option.error);
    return shippingOptions;

  } catch (error) {
    console.error('Erro ao calcular o frete no Melhor Envio:', error.response?.data || error.message);
    throw new Error('Não foi possível calcular o frete no momento. Verifique o CEP e tente novamente.');
  }
}
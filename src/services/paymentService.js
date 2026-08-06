import axios from 'axios';

/**
 * Serviço responsável por comunicar com a API do Mercado Pago para gerar cobranças via PIX.
 * @param {Object} paymentData - Dados do pedido, cliente e valor total.
 */
export async function createPixPayment(paymentData) {
  try {
    // NOTA DE TECH LEAD: O Access Token do Mercado Pago deve vir do arquivo .env (VITE_MERCADO_PAGO_TOKEN)
    const response = await axios.post(
      'https://api.mercadopago.com/v1/payments',
      {
        transaction_amount: paymentData.totalAmount,
        description: `Pedido Quimbanda M'bande - Cliente: ${paymentData.customerName}`,
        payment_method_id: 'pix',
        payer: {
          email: paymentData.email,
          first_name: paymentData.customerName,
          identification: {
            type: 'CPF',
            number: paymentData.cpf
          }
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_MERCADO_PAGO_TOKEN || 'SEU_ACCESS_TOKEN_MERCADO_PAGO'}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return {
      qrCode: response.data.point_of_interaction.transaction_data.qr_code_base64,
      qrCodeCopyPaste: response.data.point_of_interaction.transaction_data.qr_code,
      paymentId: response.data.id,
      status: response.data.status
    };
  } catch (error) {
    console.error('Erro ao gerar pagamento PIX no Mercado Pago:', error.response?.data || error.message);
    throw new Error('Não foi possível gerar o pagamento PIX. Verifique os dados e tente novamente.');
  }
}
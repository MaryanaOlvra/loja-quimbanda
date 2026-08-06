import React, { useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import { createPixPayment } from '../services/paymentService';
import { calculateShipping } from '../services/shippingService';

export function Checkout() {
  const items = useCartStore((state) => state.cartItems);
  const clearCart = useCartStore((state) => state.clearCart);
  const subtotal = useCartStore((state) => state.getSubtotal());

  const [cep, setCep] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [selectedShipping, setSelectedShipping] = useState(0);
  const [loadingShipping, setLoadingShipping] = useState(false);

  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [pixData, setPixData] = useState(null);
  const [loadingPayment, setLoadingPayment] = useState(false);

  const totalFinal = subtotal + selectedShipping;

  const handleCalculateShipping = async (e) => {
    e.preventDefault();
    setLoadingShipping(true);
    try {
      const options = await calculateShipping(cep, items);
      setShippingOptions(options);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoadingShipping(false);
    }
  };

  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();
    setLoadingPayment(true);
    try {
      const paymentResult = await createPixPayment({
        totalAmount: totalFinal,
        customerName,
        email,
        cpf
      });
      setPixData(paymentResult);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoadingPayment(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#fdf6e3] py-12 px-4">
      <div className="max-w-4xl mx-auto bg-zinc-900 border border-[#c5a059]/30 rounded-xl p-8 shadow-xl">
        <h1 className="text-3xl font-serif font-bold text-[#c5a059] mb-8 border-b border-[#c5a059]/20 pb-4">
          Checkout Seguro - Quimbanda M'bande
        </h1>

        {!pixData ? (
          <form onSubmit={handleCheckoutSubmit} className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-[#fdf6e3]">1. Dados do Comprador</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nome Completo"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                  className="bg-zinc-950 border border-[#c5a059]/30 rounded p-3 text-[#fdf6e3] focus:outline-none focus:border-[#c5a059]"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-zinc-950 border border-[#c5a059]/30 rounded p-3 text-[#fdf6e3] focus:outline-none focus:border-[#c5a059]"
                />
                <input
                  type="text"
                  placeholder="CPF (apenas números)"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  required
                  className="bg-zinc-950 border border-[#c5a059]/30 rounded p-3 text-[#fdf6e3] focus:outline-none focus:border-[#c5a059]"
                />
              </div>
            </div>

            <div className="border-t border-[#c5a059]/20 pt-6">
              <h2 className="text-xl font-semibold mb-4 text-[#fdf6e3]">2. Cálculo de Frete (Correios / Melhor Envio)</h2>
              <div className="flex gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Digite seu CEP"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  maxLength={8}
                  className="bg-zinc-950 border border-[#c5a059]/30 rounded p-3 text-[#fdf6e3] focus:outline-none focus:border-[#c5a059]"
                />
                <button
                  type="button"
                  onClick={handleCalculateShipping}
                  disabled={loadingShipping}
                  className="bg-[#4a0404] hover:bg-[#4a0404]/80 text-[#fdf6e3] font-semibold px-6 py-3 rounded border border-[#c5a059]/40 transition-all"
                >
                  {loadingShipping ? 'A calcular...' : 'Calcular Frete'}
                </button>
              </div>

              {shippingOptions.length > 0 && (
                <div className="space-y-2">
                  {shippingOptions.map((opt) => (
                    <label key={opt.id} className="flex items-center justify-between bg-zinc-950 p-3 rounded border border-[#c5a059]/20 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          value={opt.price}
                          onChange={() => setSelectedShipping(parseFloat(opt.price))}
                        />
                        <span>{opt.name} ({opt.delivery_time} dias úteis)</span>
                      </div>
                      <span className="text-[#c5a059] font-bold">R$ {parseFloat(opt.price).toFixed(2)}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-[#c5a059]/20 pt-6">
              <h2 className="text-xl font-semibold mb-4 text-[#fdf6e3]">3. Resumo e Pagamento</h2>
              <div className="bg-zinc-950 p-4 rounded border border-[#c5a059]/20 mb-6 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal dos Produtos:</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete:</span>
                  <span>R$ {selectedShipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-[#c5a059] pt-2 border-t border-zinc-800">
                  <span>Total Final:</span>
                  <span>R$ {totalFinal.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loadingPayment}
                className="w-full bg-[#c5a059] hover:bg-[#c5a059]/90 text-[#050505] font-bold py-4 rounded-lg transition-all text-center uppercase tracking-wider"
              >
                {loadingPayment ? 'A gerar PIX...' : 'Gerar PIX Dinâmico (Mercado Pago)'}
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-serif font-bold text-[#c5a059]">Cobrança PIX Gerada com Sucesso!</h2>
            <p className="text-sm text-[#fdf6e3]/80">Faça a leitura do QR Code abaixo com a aplicação do seu banco ou utilize o código Copia e Cola.</p>
            
            {pixData.qrCode && (
              <div className="flex justify-center">
                <img src={`data:image/jpeg;base64,${pixData.qrCode}`} alt="QR Code PIX" className="w-48 h-48 border-4 border-[#c5a059] rounded" />
              </div>
            )}

            <div className="bg-zinc-950 p-4 rounded border border-[#c5a059]/20 text-xs break-all text-zinc-400">
              <p className="font-semibold text-[#fdf6e3] mb-2">Pix Copia e Cola:</p>
              {pixData.qrCodeCopyPaste}
            </div>

            <button
              onClick={() => { clearCart(); window.location.href = '/'; }}
              className="bg-[#4a0404] text-[#fdf6e3] px-6 py-3 rounded border border-[#c5a059]/40 font-semibold"
            >
              Concluir / Voltar à Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
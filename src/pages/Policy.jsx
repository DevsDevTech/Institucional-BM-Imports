import { X } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Policy() {
    const nav = useNavigate()

  return (
    <div className="bg-neutral-900 text-neutral-200">
      <div className="fixed p-4 flex justify-between bg-neutral-900/90 backdrop-blur-md w-full shadow-md text-white">
        <h1 className="text-3xl font-semibold">Política de Privacidade</h1>
        <button onClick={()=>nav('/')} className="cursor-pointer">
          <X />
        </button>
      </div>

      <div className="py-25 px-5 text-justify flex flex-col gap-6">
        <p>Política de Privacidade da BM IMPORTS COMÉRCIO INTERNACIONAL LTDA</p>
        <p>
          Esta Política de Privacidade descreve como a BM IMPORTS COMÉRCIO
          INTERNACIONAL LTDA ("nós", "nossa" ou "empresa") coleta, usa, armazena
          e protege as informações pessoais dos usuários ("você", "seu" ou
          "usuário") ao acessar e utilizar nosso site institucional. Ao utilizar
          nosso site, você concorda com as práticas descritas nesta política.
        </p>
        <div>
          <p>Informações Coletadas</p>
          <p>
            Nós coletamos informações pessoais fornecidas por você
            voluntariamente, tais como nome, endereço de e-mail, número de
            telefone e outras informações relevantes durante o processo de
            cadastro, preenchimento de formulários ou interações diretas
            conosco. Além disso, informações técnicas, como endereço IP, tipo de
            navegador, sistema operacional e atividades no site, também podem
            ser coletadas automaticamente por meio de cookies e tecnologias
            similares.
          </p>
        </div>
        <div>
          <p>Uso das Informações</p>
          <p>
            As informações pessoais coletadas são utilizadas para os seguintes
            propósitos:
          </p>
        </div>
        <div>
          <p>
            Fornecer informações sobre nossos produtos, serviços e promoções;
          </p>
          <p>
            Processar e responder a suas consultas e solicitações; Melhorar e
            personalizar sua experiência no site; Envio de comunicações de
            marketing, desde que você tenha consentido;
          </p>
          <p>Cumprir obrigações legais e regulatórias.</p>
          <p>Compartilhamento de Informações</p>
          <p>
            Nós não vendemos, alugamos ou compartilhamos suas informações
            pessoais com terceiros para fins de marketing sem o seu
            consentimento expresso. No entanto, podemos compartilhar suas
            informações com:
          </p>
        </div>
        <div>
          <p>
            Parceiros de negócios e fornecedores que auxiliam na operação do
            site e na prestação de nossos serviços;
          </p>
          <p>
            Autoridades governamentais e regulatórias, quando necessário para
            cumprir obrigações legais;
          </p>
          <p>
            No caso de fusão, aquisição ou venda de ativos, as informações podem
            ser transferidas como parte da transação.
          </p>
          <p>Segurança das Informações</p>
          <p>
            Nós implementamos medidas de segurança técnicas, administrativas e
            físicas para proteger suas informações pessoais contra acesso não
            autorizado, divulgação, alteração ou destruição. No entanto, nenhuma
            transmissão de dados pela internet é totalmente segura, e não
            podemos garantir a segurança absoluta de suas informações.
          </p>
        </div>
        <div>
          <p>Seus Direitos e Escolhas</p>
          <p>
            Você tem o direito de acessar, corrigir ou excluir suas informações
            pessoais. Você também pode optar por não receber comunicações de
            marketing futuras. Para exercer esses direitos ou para retirar o
            consentimento para o processamento de suas informações, entre em
            contato conosco por meio das informações fornecidas abaixo.
          </p>
        </div>
        <div>
          <p>Alterações nesta Política</p>
          <p>
            Reservamos o direito de atualizar esta Política de Privacidade
            periodicamente para refletir mudanças em nossas práticas de
            privacidade. Recomendamos que você reveja esta política regularmente
            para se manter informado sobre como estamos protegendo suas
            informações.
          </p>
        </div>
        <div>
          <p>Contato</p>
          <p>
            Se você tiver dúvidas, preocupações ou solicitações relacionadas a
            esta Política de Privacidade ou ao tratamento de suas informações
            pessoais, entre em contato conosco:
          </p>
        </div>
        <div>
          <p>E-mail: privacidade@bmimports.com</p>
          <p>Esta Política de Privacidade foi atualizada em 21/08/2023.</p>
        </div>
      </div>
      <div className="w-full p-5 border-t-1 fixed bottom-0 bg-neutral-900 border-t-neutral-700">
        <p className="text-md text-neutral-400">Copyright 2025</p>
      </div>
    </div>
  );
}

export default Policy;
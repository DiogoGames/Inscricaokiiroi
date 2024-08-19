function sendWhatsAppMessage() {
    // Pegar o número digitado
    let phoneNumber = document.getElementById('phoneNumber').value;

    // Remover espaços, parênteses e outros caracteres não numéricos
    phoneNumber = phoneNumber.replace(/\D/g, '');

    // Verifica se o número está no formato correto (mínimo de 10 dígitos)
    if (phoneNumber.length < 10) {
        alert('Por favor, insira um número de celular válido.');
        return;
    }

    // Texto da mensagem que será enviada
    const message = encodeURIComponent(`
🎉Boas-Vindas à Kiiroi Games!

👋 Você foi convidado(a) para participar da Kiiroi Games!
Estamos felizes em estender este convite para que você se junte à nossa equipe e contribua para o sucesso de nossos projetos. Abaixo, você encontrará todas as informações necessárias para entender como funciona nossa empresa e quais são as regras que mantêm nosso ambiente de trabalho organizado e produtivo.

📜 Sobre a Kiiroi Games

A Kiiroi Games é uma empresa dedicada ao desenvolvimento de jogos digitais 3D e 2D para todas as plataformas. Fundada por Diogo Gonçalves de Souza, nossa empresa se destaca por criar experiências imersivas e inovadoras no universo dos jogos digitais. Estamos comprometidos em entregar produtos de alta qualidade que cativem e engajem jogadores ao redor do mundo.

🔒 Regras e Termos de Uso

Para garantir o bom funcionamento e a proteção dos nossos interesses empresariais, contamos com as seguintes diretrizes:

	1.	📷 Uso de Imagens e Conteúdo da Empresa
	•	O uso de qualquer imagem, marca, ou conteúdo relacionado à Kiiroi Games sem autorização expressa de um Gerente ou Administrador é estritamente proibido. Esta regra visa proteger nossos direitos autorais e a integridade da nossa marca.
	2.	🕒 Ausências
	•	AFK (Ausente por mais de 7 dias): Caso você precise se ausentar por mais de 7 dias, é obrigatório informar a administração. Ausências prolongadas sem aviso prévio resultarão em banimento permanente e expulsão da empresa.
	3.	📄 Contrato e Salário
	•	Todos os membros da equipe irão assinar um contrato de trabalho. Seu salário será determinado com base no cargo escolhido e nas responsabilidades atribuídas.

🤝 Confirmação de Aceite

Caso você aceite o convite para se juntar à nossa equipe, basta enviar uma mensagem com a palavra “Aceito” ou “Ok”. Após a confirmação, agendaremos uma reunião com a administração para definir seu cargo, explicar suas responsabilidades, regras, e discutir a carga horária.

⚠️Após sua confirmação basta acessar nosso grupo oficial do WhatsApp e aguardar para agendáramos sua reunião : 

👀 https://chat.whatsapp.com/K3mjnkFmM7b67IIby7Vis5

🎁 Bônus de Indicação

	•	Incentivo de R$50: Se você indicar 5 pessoas para a empresa e elas forem contratadas, você receberá um bônus de R$50!

❓ Dúvidas

Se tiver qualquer dúvida ou precisar de mais informações, não hesite em nos contatar. Estamos à disposição para ajudá-lo(a) com o que for necessário.

Estamos ansiosos para saber sua resposta e, quem sabe, tê-lo(a) como parte da nossa equipe! 😊
`);

    // Criar a URL de WhatsApp para abrir a mensagem
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Abrir o WhatsApp
    window.location.href = whatsappURL;
}
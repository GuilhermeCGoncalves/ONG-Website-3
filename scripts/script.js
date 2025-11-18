function Validate() {

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const birth = document.getElementById('birth').value.trim();

    const address = document.getElementById('address').value.trim();
    const cep = document.getElementById('cep').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();

    if (name === "" || email === "" || cpf === "" || phone === "" || birth === "" || address === "" || cep === "" || city === "" || state === "") {
        alert("Por favor, preencha todos os campos antes de continuar!");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um email válido.");
        return;
    }

    if (cpf.length < 11) {
        alert("O CPF está incorreto");
        return;
    }

    if (phone.length < 9) {
        alert("O número de telefone está incorreto");
        return;
    }

    if (cep.length < 8) {
        alert("O CEP está incorreto");
        return;
    }
}
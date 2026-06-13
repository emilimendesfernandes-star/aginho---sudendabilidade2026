const conexoes = [
  { produto: "Leite", origem: "Fazenda Boa Vista", destino: "Supermercado Central" },
  { produto: "Soja", origem: "Cooperativa Rural", destino: "Indústria de Óleo" },
  { produto: "Frutas", origem: "Sítio Primavera", destino: "Feira Municipal" }
];

const lista = document.getElementById("lista");

conexoes.forEach(item => {
  const div = document.createElement("div");
  div.className = "conexao";
  div.innerHTML = `<span class="produto">${item.produto}</span> - Origem: ${item.origem} → Destino: ${item.destino}`;
  lista.appendChild(div);
});

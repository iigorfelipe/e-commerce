<div align="center">

# Loja Ortopédica

[🔗 Acesse o site](https://iigorfelipe.github.io/e-commerce/#/orthopedic-line)

</div>

## 🖼️ Imagens:

<img src="https://github.com/user-attachments/assets/2477eef8-26f6-447c-a734-e8d99298acd7" alt="mobile detail" height="450px" /> <img src="https://github.com/user-attachments/assets/90cffb4c-e6a1-416a-888e-a9e7b2706367" alt="mobile detail" height="450px" /> <img src="https://github.com/user-attachments/assets/bb0b5d15-8acd-4b9d-b262-6d667b924229" alt="mobile detail" height="450px" /> | <img src="https://github.com/user-attachments/assets/bbd64a5f-fb6c-4393-b09a-5f124fff4060" alt="mobile detail" height="450px" />

<img src="https://github.com/user-attachments/assets/046dd991-ab9e-4fa0-b649-7d8ddf7d8056" alt="desktop home" height="450px" />
<img src="https://github.com/user-attachments/assets/7f2c7b90-96d8-4ac6-bf91-1cc1e91eabe4" alt="desktop footer" height="450px" />

## 📄 Sobre o Projeto:

**Loja Ortopédica** é um protótipo de e-commerce desenvolvido para um desafio técnico com foco em **responsividade**, **adaptação mobile**, e **fidelidade ao design** fornecido no Figma.

O objetivo principal foi garantir uma boa **experiência de navegação** tanto em dispositivos desktop quanto em mobile, mesmo sem um layout mobile previamente definido. Todo o design para telas pequenas foi pensado e desenhado por mim, priorizando usabilidade e boas práticas de UX.

## 📱 Responsividade e Versão Mobile

A versão mobile foi completamente **projetada do zero**, baseada em referências como o aplicativo da Amazon, além de rascunhos criados por mim no Excalidraw. Os principais pontos focados foram:

- Hierarquia clara de informações
- Tamanhos de fonte e espaçamento ajustados para leitura confortável
- Menu mobile acessível e funcional (hamburger)
- Layout fluido e adaptado para diferentes tamanhos de tela

## 🧠 Decisões de Arquitetura e Design

### 🧾 Planejamento

- Elaborei um passo a passo de prioridades, com foco inicial total na versão mobile.
- Criei esboços visuais no Excalidraw para guiar o desenvolvimento mobile.
- Usei referências do mercado real para entregar algo coerente e funcional.

### ⚙️ Ferramentas e Bibliotecas

- **React + Vite + TypeScript** para estrutura e agilidade.
- **Tailwind CSS** com **shadcn/ui** para estilização moderna e acessível.
- **Jotai** para gerenciamento de estado simples e performático.

---

## 📦 Estrutura de Pastas

```txt
src/
├── common/        → Utilitários e recursos compartilhados entre várias partes do projeto
├── components/    → Componentes genéricos e reutilizáveis.
├── hooks/         → Hooks customizados de uso global ou compartilhado.
├── lib/           → Utilitários do Tailwind.
├── modules/       → Estrutura modular por página.
├── pages/         → Páginas do site.
├── store/         → Gerenciamento de estado global utilizando Jotai.
```

## 🚀 Executando o Projeto Localmente:

1. Clone o repositório:

```bash
git clone git@github.com:iigorfelipe/e-commerce.git
```

2. Instale as dependências:

```bash
cd e-commerce
npm install
```

3. Execute o projeto:

```bash
npm run dev
```

⚠️ Se encontrar qualquer dificuldade, sinta-se à vontade para me contatar através dos links fornecidos ao final desta documentação.

## 💡 Melhorias Futuras:

Caso tivesse mais tempo, eu implementaria:

📈 Performance e UX

- Otimização de imagens (carregar versões menores para cards e maiores apenas em destaque)
- Skeletons
- Suspense boundaries com fallback de carregamento
- Lazy load inteligente por seção
- Modo dark

📦 Funcionalidades Avançadas

- Carrinho de compras
- Página completa de detalhes do produto
- Filtros funcionais
- Pesquisa por produtos
- Compartilhamento de produtos
- Download de catálogos

⚙️ Infraestrutura e Código

- Implementação com React Query para gerenciamento eficiente de cache
- Tela de Not Found e Error Boundary para tratamento de erros
- Internacionalização com i18n
- Tela de login e controle de vendedores
- Testes unitários

## 🧩 Protótipo Inicial do Mobile

<img src="https://github.com/user-attachments/assets/203cbfd1-a7eb-4d81-a4d7-aa08d18a9e67/">

## 👨‍💻 Autor

**@Igor Soares**

[![Linkedin Badge](https://img.shields.io/badge/-LinkdedIn-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/iigor-felipe/)](https://www.linkedin.com/in/iigor-felipe/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:iigorfelipe@gmail.com)](mailto:iigorfelipe@gmail.com)

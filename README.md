# Desafio | Focus Timer 2.0

O que fazer:

- Criar uma aplicação com esse layout: https://www.figma.com/file/aQPr5AjTmeS2dSH7Fa5luh/Stage-05---Focus-Timer-2.0-(Copy)-(Copy)?t=Zd8qUKlk0W87DJtr-0

- Quando clicar em cada card, ele deve mudar de cor e começar a tocar um som.

  - Floresta: https://drive.google.com/file/d/1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA/view
  - Chuva: https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view
  - Cafeteria: https://drive.google.com/file/d/1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA/view
  - Lareira: https://drive.google.com/file/d/1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB/view

- O botão PLAY deve acionar o timer.
- O botão STOP deve parar o timer.
- O botão + deve aumentar em mais 5 minutos.
- O botão - deve diminuir em 5 minutos.

# Desafio | Focus Timer Dark

OK - Criar o dark mode: https://www.figma.com/file/Wr075kNfcVTdKdEnecd4Ha/Stage-05---Dark-Mode-FocusTimer-(Copy)-(Copy)?t=AGIvPYpIJ48HIaoG-0
- Nessa versão, o volume dos sons deverá ser controlado pelo slider que está embaixo de cada ícone. Por padrão, quando você clicar em qualquer área de um card, você pode deixar o volume em 50%.

<<<<<<< HEAD
# Próximos passos

- Fazer o CSS do dark mode.

- Começar o JS.
=======
# Para lembrar 

- Todos os botões da página estão incluímos por meio do css/svg. Na mudança de light pra dark e vice versa, vai ser preciso aplicar um hide nos botões do respectivo modo.

- Os únicos elementos da página que têm cor configurada no css é o text-color e o background color do body.

- Light theme
blue card background: #02799D
gray card background: #E1E1E6

- Dark theme
primary color/dark gray: #29292E
secondary color/dark blue: #0A3442

# Status

- Finalizei a configuração do light mode e do dark mode, mas é preciso pensar em uma forma mais produtiva de nomear classes de modo que eu consiga usar o javascript para pegar os elementos por meio da classe sem ter que fazer o mesmo código pro light e pro dark. A ideia é usar um javascript só pro light e pro dark. Possível solução: transformar a classe "timer__controls__play--light hide" em duas - "timer__controls__play" e "button__play--light".
>>>>>>> da640b7a2ac2b3e702c875fbabc95d5fd4004690

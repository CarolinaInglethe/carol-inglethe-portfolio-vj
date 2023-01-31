let currentState = history.state;
 console.log(currentState)
 
 switch(currentState) {
  case '/':
    console.log('Esta na pagina inicial');
    break;
  case '/sobre':
    console.log('Está na pagina sobre');
    break;
  default:
    console.log('Nenhuma')
}
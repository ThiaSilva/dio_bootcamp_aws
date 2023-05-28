var  AWS  =  require ( 'aws-sdk' ) ;
const  dynamodb  =  novo  AWS . DynamoDB . DocumentClient ( ) ;

exportações . manipulador  =  assíncrono  ( evento )  =>  {
    
    deixe  respostaCorpo  =  ""
    deixe  statusCode  =  0
    
    let  { id , preço }  =  JSON . parse ( evento . corpo ) ;
    
     parâmetros  const =  {
      NomeTabela : 'Itens' ,
      /* As propriedades do item dependerão das preocupações de sua aplicação */
      Artigo : {
         id : id ,
         preço : preço
      }
    }
    
    tente  {
        
        aguarde  dynamodb . colocar ( parâmetros ) . promessa ( ) ;
        statusCode  =  200 ;
        corpo da resposta  =  JSON . stringify ( 'Item inserido com sucesso!' ) ;
        
    }  pegar  ( err )  {
          
        statusCode  =  200 ;
        corpo da resposta  =  JSON . stringify ( err ) ;
        
    }
      
     resposta  constante =  {
        statusCode : statusCode ,
        corpo : corpo da resposta ,
    } ;
    
     resposta de retorno ;
} ;
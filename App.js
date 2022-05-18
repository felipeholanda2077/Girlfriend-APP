import React, { Component } from 'react'; 
import { View, Text, Button, Image, ScrollView} from 'react-native';
import { form } from '../Amorzinho/index'

// Criamos a nossa classe App para renderizar nosso projeto 
class App extends Component { 
  render() { 
    // Caminho URI da nossa imagem 
    let coracaoURI = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/220px-Heart_coraz%C3%B3n.svg.png";
    let AmorURI = "https://www.bigfesta.com.br/resizer/view/373/373/false/true/27972.jpg";
    let logoLocal = require ('../Amorzinho/images/Agente.png');
    let voceLocal = require ('../Amorzinho/images/Você.jpeg');
    // Array de imagens
    // Esse array ira inserir a mesma imagem até o loop terminar
    let carrosel = []
    for (let i=0; i < 1; i++) {
      carrosel.push(<Image style = {{position: "relative" ,width: 340,  height: 350, margin: 5}} source = {{uri: logoLocal}} /> )
    }
    let voce = []
    for (let i=0; i < 1; i++) {
      voce.push(<Image style = {{position: "relative" ,width: 340,  height: 350, margin: 5}} source = {{uri: voceLocal}} /> )
    }
    let imagens = []
    for (let i=0; i < 1; i++) {
      imagens.push(<Image style = {{width:340, height:350, margin: 5}} source = {{uri: coracaoURI}} /> )
    }
    for (let i=0; i < 1; i++) {
      imagens.push(<Image style = {{ position: "absolute", left: 150, top: 150, width:190, height:210, margin: 5}} source = {{uri: AmorURI}} /> )
    }
    return ( 
      <ScrollView>
        {/* Area que será utilizada pelo nosso conteúdo */}
        <View style={form.container}>
          
            {/* Inserindo textos e estilizando */} 
            <Text style={{fontSize: 20, textTransform: 'uppercase'}}></Text> 
            <Text style={{color: 'black', fontSize: 20, textTransform: 'uppercase', textAlign: 'center', paddingTop: 10}}>Meu Amor por Você</Text>

            <Text style={{textAlign: "center",fontSize: 15}}>Meu amorzinho, você é mais do que tudo para mim em em todo universo, hoje lhe fiz esse aplicativo para te amostrar o quanto que eu te amo demais e para você ver que é muito mas muito especial para mim todinha das pontas dos pes até o topo da cabeça amorzinho da minha vida todinha.</Text>
             
            <ScrollView>
              {imagens}
            </ScrollView>

            <Button style={{paddingTop: 10}} color={"black"} onPress={() => { alert('Uma confissão: Eu te amo \nUm desejo: Estar com você \nUm voto: Sua felicidade \nUm sonho: Ter você eternamente \nUma emoção: Nosso primeiro beijo \nUm objetivo: Uma vida a dois \nUm pedido: Por favor me ame \nUm lembrete: Amarei você sempre \n\n❤️Tudo isso porque: Te amo demais!❤️');}} title='Aperte Aqui'></Button>
            <Text style={{textAlign: "center",fontSize: 10}}></Text>
            <Button paddingTop={50} color={'black'} onPress={() => { alert('🛐Meu Love todinho da minha Vida!!🛐');}} title='Supresa'></Button>
            <Text style={{textAlign: "center",fontSize: 10}}></Text>
            <Text style={{textAlign: "center",fontSize: 10}}></Text>
            
            <Image
              style = {{borderRadius:30, width:353, height:400}}
              source = {logoLocal}
            />
            <Text style={{textAlign: "center",fontSize: 25}}></Text>
            <Text style={{textAlign: "center",fontSize: 25}}>Minha Perfeição da minha vida todinha😍😍😍😍😍🥰</Text>
            <Text style={{textAlign: "center",fontSize: 25}}></Text>
            <Image
              style = {{borderRadius:30, width:353, height:500}}
              source = {voceLocal}
            />
            
            <Text style={{textAlign: "center",fontSize: 25}}></Text>
            <Button paddingTop={50} color={'black'} onPress={() => { alert('⚠️⚠️⚠️ALERTAAAA⚠️⚠️⚠️ \n\n    Certidao de Casamento   \n\nVitoria Lima está Oficalmente Casada com Felipe Holanda👏👏👏👏');}} title='Aperte aqui para viver para sempre comigo👀'></Button>

            <Text style={{textAlign: "center",fontSize: 13, paddingTop: 100}}>© Felipe Holanda - O Amorzinho Da Sua Vida</Text>

              
        </View> 
      </ScrollView>
    ) 
    }
  }

  // Informamos qual classe será renderizada no aplicativo 
  export default App;
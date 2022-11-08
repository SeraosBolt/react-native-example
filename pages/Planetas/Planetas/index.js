import React from "react";
import { ScrollView, View, Text, Image, ImageBackground } from "react-native";

import PlanetaHeader from "../../../components/Planetas-Headers";
import ImageTitle from "../../../components/image-title";

import planetas from "../../../assets/planetas.jpg";
import ptolemaic from "../../../assets/Ptolemaicsystem-small.png";
import olympians from "../../../assets/Olympians.jpg";
import planetary_disck from "../../../assets/Protoplanetary-disk.jpg";
import planetary from "../../../assets/Terrestrial_planet_size_comparisons.jpg";
import carac_fisica from "../../../assets/superjupter.jpg";

import styles from "./planetas_styles";

export default function Planetas(props) {
  return (
    <View style={styles.container}>
      <PlanetaHeader
        nav={props.navigation}
        image={planetas}
        text="PLANETAS"
        page="Planeta-Home"
      />
      <ScrollView>
        <View style={styles.content}>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.paragrafo_text}>
              Um planeta (do grego πλανήτης [planεːtεːs] {"\n"}
              viajante) é um corpo celeste que orbita uma {"\n"}
              estrela ou um remanescente de estrela, com massa suficiente para
              se tornar esférico {"\n"}
              pela sua própria gravidade, mas não ao {"\n"}
              ponto de causar fusão termonuclear, e {"\n"}
              que tenha limpado de planetesimais a sua {"\n"}
              região vizinha (dominância orbital).{"\n"}
            </Text>
            <Text style={styles.paragrafo_text}>
              O termo planeta é antigo, com ligações com {"\n"}a história,
              astrologia, ciência, mitologia e {"\n"}
              religião. Os planetas eram vistos por muitas {"\n"}
              culturas antigas como divinos ou emissários {"\n"}
              de deuses. {"\n"}
            </Text>
            <Text style={styles.paragrafo_text}>
              À medida que o conhecimento científico {"\n"}
              evoluiu, a percepção humana sobre os {"\n"}
              planetas mudou, incorporando diversos tipos de objetos. {"\n"}
            </Text>
            <Text style={styles.paragrafo_text}>
              Em 2006, a União Astronômica Internacional {"\n"}
              (UAI) adotou oficialmente uma resolução {"\n"}
              definindo planetas dentro do Sistema {"\n"}
              Solar, a qual tem sido elogiada e criticada, {"\n"}
              permanecendo em discussão entre alguns cientistas.{"\n"}
            </Text>
            <Text style={styles.paragrafo_text}>
              Ptolomeu imaginava que os planetas {"\n"}
              orbitavam a Terra, em movimentos do {"\n"}
              epiciclo e círculo deferente. {"\n"}
              Embora a ideia de que os planetas orbitavam {"\n"}o Sol tivesse
              sido sugerida muitas vezes, {"\n"}
              somente no século XVII esta visão foi {"\n"}
              suportada por evidências pelas primeiras {"\n"}
              observações telescópicas, realizadas por {"\n"}
              Galileu Galilei. Através da cuidadosa análise {"\n"}
              dos dados das observações, Johannes Kepler {"\n"}
              descobriu que as órbitas dos planetas não {"\n"}
              são circulares, mas elípticas. {"\n"}
            </Text>
            <Text style={styles.paragrafo_text}>
              À medida que as ferramentas de observação {"\n"}
              foram desenvolvidas, os astrônomos {"\n"}
              perceberam que os planetas, como a Terra, {"\n"}
              giravam em torno de eixos inclinados e que {"\n"}
              alguns compartilhavam características como {"\n"}
              calotas polares e estações do ano. {"\n"}
            </Text>
            <Text style={styles.paragrafo_text}>
              Desde o início da era espacial, observações {"\n"}
              mais próximas por meio de sondas {"\n"}
              demonstraram que a Terra e os outros {"\n"}
              planetas também compartilham {"\n"}
              características como vulcanismo, furacões, {"\n"}
              tectônica e até mesmo hidrologia.{"\n"}
            </Text>
            <Text style={styles.paragrafo_text}>
              Os planetas do Sistema Solar são divididos {"\n"}
              em dois tipos principais: os grandes planetas {"\n"}
              gigantes gasosos (ou jovianos), de baixa {"\n"}
              densidade, e os menores e rochosos planetas {"\n"}
              telúricos ou terrestres. {"\n"}
              Pelas definições da UAI, há oito planetas {"\n"}
              no Sistema Solar: em ordem crescente de {"\n"}
              distância do Sol, são os quatro planetas {"\n"}
              telúricos Mercúrio, Vênus, Terra e Marte {"\n"}e depois os quatro
              gigantes gasosos {"\n"}
              Júpiter, Saturno, Urano e Netuno. {"\n"}
              Seis dos planetas são orbitados por um ou mais satélites naturais.
              Além disso, o Sistema Solar possui pelo menos cinco planetas anões
              e centenas de milhares de corpos menores.{"\n"}
            </Text>
            <Text style={styles.paragrafo_text}>
              Vários milhares de planetas orbitando outras estrelas (“planetas
              extrassolares” ou exoplanetas”) foram descobertos na Via Láctea.{" "}
              {"\n"}
              Até 1º de março de 2021, foram descobertos 4 687 planetas
              extrassolares, em 3 463 sistemas planetários (incluindo 770
              sistemas multiplanetários), variando em tamanho desde mais ou
              menos o tamanho da Lua até gigantes gasosos com aproximadamente
              duas vezes o tamanho de Júpiter, dos quais mais de cem com o mesmo
              tamanho da Terra, nove dos quais estão à mesma distância relativa
              de suas estrelas que a Terra do Sol, isto é, estão na zona
              habitável circunstelar.{"\n"}
              Em 20 de dezembro de 2011, a equipe do {"\n"}
              telescópio espacial Kepler registrou a descoberta dos primeiros
              planetas extrassolares do tamanho da Terra, Kepler-20e e
              Kepler-20f, orbitando uma estrela similar ao Sol, Kepler-20.{"\n"}
              Um estudo de 2012, analisando dados de microlente gravitacional,
              estima uma média de 1,6 planeta ligado a cada estrela da Via
              Láctea. {"\n"}
              Acredita-se que uma em cada cinco estrelas similares ao Sol possui
              um planeta do tamanho da Terra em sua zona habitável. Os planetas
              são mais numerosos que as estrelas.{"\n"}
            </Text>
          </View>
        </View>
        <ImageTitle image={ptolemaic} text="HISTÓRIA" color="black" />
        <View style={styles.content}>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.paragrafo_text}>
              A ideia de planeta evoluiu ao longo da história, das luzes divinas
              da antiguidade aos objetos concretos da era científica. {"\n"}O
              conceito se expandiu para incluir mundos não apenas no Sistema
              Solar, mas em centenas de sistemas extrassolares. {"\n"}
              As ambiguidades inerentes à definição de planeta levaram a muita
              controvérsia científica.{"\n"}
            </Text>
            <Text style={styles.paragrafo_text}>
              Os cinco planetas clássicos do Sistema Solar, sendo visíveis a
              olho nu, são conhecidos desde a antiguidade e tiveram um impacto
              significativo na mitologia, cosmologia religiosa e astronomia
              antiga. {"\n"}
              Na antiguidade, os astrônomos notaram como certas luzes se moviam
              no céu em relação às outras estrelas. {"\n"}
              Os antigos gregos chamaram essas luzes "πλάνητες ἀστέρες"
              (planetes asteres: “estrelas errantes”) ou simplesmente "πλανήτοι"
              (planētoi: “errantes”), a partir do que derivou a palavra atual
              "planeta".{"\n"}
              Nas antigas Grécia, China e Babilônia e em quase todas as
              civilizações pré-modernas, acreditava-se quase universalmente que
              a Terra era o centro do universo e que todos os planetas a
              circundavam. {"\n"}A razão para esta percepção era que todos os
              dias as estrelas e planetas pareciam girar em torno da Terra, e o
              aparente senso comum da percepção de que a Terra era sólida e
              estável e que estava em repouso e não se movendo.
            </Text>
          </View>
        </View>
        <ImageTitle image={olympians} text="Mitologia e nomes" color="white" />
        <View style={styles.content}>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.paragrafo_text}>
              A ideia de planeta evoluiu ao longo da história, das luzes divinas
              da antiguidade aos objetos concretos da era científica. {"\n"}O
              conceito se expandiu para incluir mundos não apenas no Sistema
              Solar, mas em centenas de sistemas extrassolares. {"\n"}
              As ambiguidades inerentes à definição de planeta levaram a muita
              controvérsia científica.{"\n"}
            </Text>
            <Text style={styles.paragrafo_text}>
              Os cinco planetas clássicos do Sistema Solar, sendo visíveis a
              olho nu, são conhecidos desde a antiguidade e tiveram um impacto
              significativo na mitologia, cosmologia religiosa e astronomia
              antiga. {"\n"}
              Na antiguidade, os astrônomos notaram como certas luzes se moviam
              no céu em relação às outras estrelas. {"\n"}
              Os antigos gregos chamaram essas luzes "πλάνητες ἀστέρες"
              (planetes asteres: “estrelas errantes”) ou simplesmente "πλανήτοι"
              (planētoi: “errantes”), a partir do que derivou a palavra atual
              "planeta".{"\n"}
              Nas antigas Grécia, China e Babilônia e em quase todas as
              civilizações pré-modernas, acreditava-se quase universalmente que
              a Terra era o centro do universo e que todos os planetas a
              circundavam. {"\n"}A razão para esta percepção era que todos os
              dias as estrelas e planetas pareciam girar em torno da Terra, e o
              aparente senso comum da percepção de que a Terra era sólida e
              estável e que estava em repouso e não se movendo.
            </Text>
          </View>
        </View>
        <ImageTitle image={planetary_disck} text="FORMAÇÃO" color="white" />
        <View style={styles.content}>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.paragrafo_text}>
              Não se sabe com certeza como os planetas se formam. A teoria
              predominante é que eles são formados quando do colapso de uma
              nebulosa em um disco fino de gás e pó. Uma protoestrela se forma
              no núcleo, cercada por um disco protoplanetário giratório. Por
              meio de acreção (um processo de aglutinação por colisão),
              partículas de poeira do disco acumulam massa continuamente,
              formando corpos cada vez maiores. Formam-se concentrações de
              massa, conhecidas como planetesimais, as quais aceleram o processo
              de acreção ao atrair material adicional com a sua força
              gravitacional. Essas concentrações se tornam cada vez mais densas,
              até que colapsam para seu interior devido à gravidade, formando
              protoplanetas. Quando um planeta atinge uma massa um tanto maior
              do que a de Marte, ele começa a acumular uma atmosfera, aumentando
              muito a frequência de captura de planetesimais, por meio do
              arrasto atmosférico. Dependendo da história de acreção de sólidos
              e gases, podem resultar um planeta gigante, um gigante gelado ou
              um planeta terrestre.
            </Text>
            <Text style={styles.paragrafo_text}>
              Com a descoberta e observação de sistemas planetários em torno de
              outras estrelas, torna-se possível elaborar, revisar ou mesmo
              substituir este processo. Acredita-se atualmente que o nível de
              metalicidade - um termo astronômico que descreve a abundância de
              elementos químicos com número atômico maior que 2 (hélio) -
              determine a probabilidade de uma estrela possuir planetas Logo,
              acredita-se que uma estrela da População I rica em metal terá
              provavelmente um sistema planetário mais substancial do que uma
              estrela da População II pobre em metal.
            </Text>
          </View>
        </View>
        <ImageTitle image={planetary} text="ATRIBUTOS" color="white" />
        <View style={styles.content}>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.paragrafo_text}>
              Características dinâmicas Órbita A órbita de Netuno comparada à de
              Plutão. Note-se a elongação da órbita de Plutão em relação à de
              Netuno (excentricidade), bem como o seu grande ângulo em relação à
              eclíptica (inclinação). De acordo com as definições atuais, todos
              os planetas devem girar em torno de estrelas; logo, quaisquer
              planetas órfãos são excluídos. No Sistema Solar, todos os planetas
              orbitam o Sol no mesmo sentido da rotação do Sol (anti-horário,
              para um observador sobre o polo norte do Sol). Pelo menos um
              planeta extrassolar, WASP-17b, foi descoberto numa órbita em
              sentido oposto ao da rotação da sua estrela. O período de uma
              revolução de um planeta em sua órbita é conhecido como o seu
              período sideral ou ano. Um ano de um planeta depende da sua
              distância para a sua estrela; quanto mais longe um planeta está da
              sua estrela, não apenas ele terá maior distância para percorrer,
              como também menor será sua velocidade, pois ele será menos afetado
              pela gravidade da estrela. Como nenhuma órbita de planeta é
              perfeitamente circular, a distância varia ao longo do ano. A maior
              aproximação para a sua estrela é chamada o seu periastro (periélio
              no Sistema Solar), enquanto a maior separação é chamada apoastro
              (afélio). À medida que um planeta se aproxima do periastro, sua
              velocidade aumenta pela transformação da energia potencial
              gravitacional em energia cinética, da mesma forma como um objeto
              em queda livre na Terra ganha velocidade à medida que cai; quando
              o planeta atinge o apoastro, sua velocidade diminui, da mesma
              forma como um objeto atirado para cima na Terra perde velocidade
              quando se aproxima do ápice da sua trajetória. A órbita de cada
              planeta é definida por um conjunto de elementos: • A
              excentricidade de uma órbita descreve quão alongada ela é.
              Planetas com baixa excentricidade têm órbitas mais circulares,
              enquanto planetas com alta excentricidade têm órbitas mais
              elípticas. Os planetas do Sistema Solar têm excentricidades muito
              baixas e, portanto, órbitas quase circulares. Cometas e objetos do
              Cinturão de Kuiper, assim como vários planetas extrassolares, têm
              excentricidades muito altas, logo órbitas fortemente elípticas. •
              O semieixo maior é a distância de um planeta até a metade do maior
              diâmetro da sua órbita elíptica (ver imagem). Esta distância não é
              igual ao apoastro, porque nenhuma órbita de planeta tem a estrela
              no seu centro. • A inclinação de um planeta indica o quanto sua
              órbita está acima ou abaixo de um plano de referência. No Sistema
              Solar, o plano de referência é o plano da órbita da Terra, chamado
              eclíptica. Para planetas extrassolares, o plano, conhecido como
              ‘’’plano celeste’’’, é o plano da linha de visão do observador a
              partir da Terra. Os oito planetas do Sistema Solar estão todos
              muito próximos da eclíptica, enquanto cometas e objetos do
              Cinturão de Kuiper, como Plutão, estão a ângulos muito maiores em
              relação a ela. Os pontos em que um planeta atravessa acima e
              abaixo o seu plano de referência são chamados nós ascendente e
              descendente. A longitude do nó ascendente é o ângulo entre a
              longitude zero do plano de referência e o nó ascendente do
              planeta. O argumento do periastro (ou periélio no Sistema Solar) é
              o ângulo entre o nó ascendente do planeta e a sua maior
              aproximação da estrela. Inclinação axial A inclinação axial da
              Terra é de cerca de 23,4°. Ela oscila entre 22,1° e 24,5°, num
              ciclo de 41 mil anos e atualmente está decrescendo. Os planetas
              também têm graus variados de inclinação axial: eles estão a um
              determinado ângulo do plano do equador das suas estrelas. Isto faz
              variar a quantidade de luz recebida em cada hemisfério ao longo do
              ano; quando o hemisfério norte não está voltado para a sua
              estrela, o hemisfério sul aponta para ela, e vice-versa. Cada
              planeta possui, portanto, estações do ano: mudanças no clima ao
              longo do ano. O momento em que cada hemisfério está mais distante
              ou mais próximo da sua estrela é chamado solstício. Cada planeta
              tem dois no curso de um ano; quando um hemisfério tem o seu
              solstício de verão (o dia é mais longo), o outro tem o seu
              solstício de inverno (o dia é mais curto). A quantidade variável
              de luz e calor recebida em cada hemisfério cria mudanças anuais
              nos padrões de clima em cada metade do planeta. A inclinação axial
              de Júpiter é muito pequena, portanto sua variação sazonal é
              mínima. Urano, por outro lado, tem uma inclinação axial tão
              extrema que ele está virtualmente de lado, o que significa que os
              seus hemisférios estão sempre iluminados ou sempre na escuridão na
              época dos seus solstícios. Entre os planetas extrassolares, as
              inclinações axiais não são conhecidas com certeza, embora se
              acredite que a maior parte dos Jupiteres quentes tenha inclinação
              axial desprezível ou nula, como resultado da proximidade com as
              suas estrelas. Rotação Os planetas giram em torno de eixos
              invisíveis que passam pelos seus centros. O período de rotação de
              um planeta é chamado o seu dia. A maioria dos planetas no Sistema
              Solar gira no mesmo sentido em que orbita o Sol, que é
              anti-horário, para um observador acima do polo norte do Sol.
              Exceções são Vênus e Urano, que giram no sentido horário, embora a
              extrema inclinação axial de Urano leve a diferentes convenções
              sobre qual dos seus polos é o "norte" e, portanto, se o planeta
              está girando no sentido horário ou anti-horário. Entretanto,
              qualquer que seja a convenção usada, Urano tem rotação retrógrada
              em relação a sua órbita. A rotação de um planeta pode ser induzida
              por vários fatores durante a sua formação. Um momento angular
              resultante pode ser induzido pelas contribuições individuais de
              momentos angulares de objetos acretados. A acreção de gás pelos
              gigantes gasosos também pode contribuir para o momento angular.
              Finalmente, nos últimos estágios da formação do planeta, um
              processo estocástico de acreção protoplanetária pode alterar
              randomicamente o eixo de rotação de um planeta. Há uma grande
              variação na duração de um dia entre os planetas, com Vênus levando
              243 dias terrestres para dar uma volta e os gigantes gasosos
              apenas algumas horas. Os períodos rotacionais de planetas
              extrassolares não são conhecidos, entretanto, para os Jupiteres
              quentes, sua proximidade para as suas estrelas significa que estão
              em acoplamento de maré (suas órbitas estão sincronizadas com suas
              rotações). Isto significa que eles somente mostram uma face para
              as suas estrelas, ficando um lado em dia perpétuo e o outro em
              noite perpétua. Dominância orbital A característica dinâmica
              definidora de um planeta é que ele tenha limpado a sua vizinhança.
              Um planeta que limpou a sua vizinhança acumulou massa suficiente
              para agrupar ou afastar todos os planetesimais na sua órbita. Com
              efeito, ele orbita a sua estrela isoladamente, em oposição a
              compartilhar a órbita com uma multidão de objetos de tamanho
              similar. Esta característica foi estabelecida como parte da
              definição oficial de planeta da UAI em agosto de 2006. O critério
              exclui corpos planetários como Plutão, Éris e Ceres da lista de
              planetas habilitados, fazendo deles planetas anões. Embora até o
              momento este critério somente se aplique ao Sistema Solar, alguns
              sistemas extrassolares jovens foram encontrados nos quais as
              evidências sugerem que a dominância orbital está acontecendo
              dentro dos discos estelares.
            </Text>
          </View>
        </View>
        <ImageTitle image={carac_fisica} text="CARAC. FÍSICAS" color="white" />
        <View style={styles.content}>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.paragrafo_text}>
              Massa Uma característica física definidora de um planeta é que ele
              tenha massa suficiente para que a força de sua própria gravidade
              domine as forças eletromagnéticas que unem a sua estrutura física,
              levando a um estado de equilíbrio hidrostático. Isto efetivamente
              significa que todos os planetas são esféricos ou esferoidais. Até
              uma determinada massa, um objeto pode ter uma forma irregular, mas
              a partir deste ponto, que varia em função da sua composição
              química, a gravidade começa a puxar o objeto em direção ao seu
              centro de massa, até que ele colapsa, tornando-se uma esfera.[149]
              A massa é também o primeiro atributo pelo qual os planetas se
              distinguem das estrelas. O limite superior de massa para planetas
              é aproximadamente 13 vezes a massa de Júpiter (MJ) para objetos
              com abundância natural semelhante ao Sol, a partir do que ele
              ganha condição favorável para a fusão nuclear. Além do Sol, nenhum
              objeto com tal massa existe no Sistema Solar, mas há planetas
              extrassolares neste limite. Não há uma concordância universal para
              o limite de 13 MJ, e a Enciclopédia de Planetas Extrassolares
              inclui objetos de até 60 MJ,[150] enquanto o Exoplanet Data
              Explorer considera até 24 massas de Júpiter.[151] O menor planeta
              conhecido, excluindo planetas anões e satélites, é PSR B1257+12A,
              um dos primeiros planetas extrassolares descobertos, que foi
              encontrado em 1992 em órbita de um pulsar. Sua massa é
              aproximadamente a metade da de Mercúrio.[5] O menor planeta
              conhecido orbitando uma estrela da sequência principal que não o
              Sol é Kepler-37b, com massa (e raio) ligeiramente maior do que a
              da Lua.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

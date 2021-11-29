import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, Button, Modal,Pressable} from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';


export default class test extends Component {

  constructor() {
    super();
    this.state = {
      berg: {},
      showResults: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
    this.setShowResultsVisible = this.setShowResultsVisible.bind(this);
    this.clear = this.clear.bind(this);
  }
  //function for popup
  setShowResultsVisible(visible) {
    this.setState({ showResults: visible });
  }

  handleInputChange(name, value) {
    this.state.berg[name] = value;
    //last part is updating the state
    this.setState({ berg: this.state.berg });
  }
  //function for submit
  submit() {
    this.setState({ showResults: true });
    let total =
      +this.state.berg.scoreOne +
      +this.state.berg.scoreTwo +
      +this.state.berg.scoreThree +
      +this.state.berg.scoreFour +
      +this.state.berg.scoreFive +
      +this.state.berg.scoreSix +
      +this.state.berg.scoreSeven +
      +this.state.berg.scoreEight +
      +this.state.berg.scoreNine +
      +this.state.berg.scoreTen +
      +this.state.berg.scoreEleven +
      +this.state.berg.scoreTwelve +
      +this.state.berg.scoreThirteen +
      +this.state.berg.scoreFourteen;
    console.log("hello");
    if (Number.isNaN(total)) {
      this.setState({ total: "You missed at least one answer" });
    } else {
      this.setState({ total: total });
    }
  }

  clear() {
    this.setState({ berg: {} });
  }


    render() {
      const { showResults } = this.state;
  return (
    <SafeAreaView>
    <ScrollView>
    <PaperProvider>
      {/* for popup answer */}
      <View style={styles.centerView}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={ showResults}
        onRequestsClose={() => {
          this.setShowResultsVisible(!showResults);
        }}
        // Modal rendering
        ><View style={styles.modalView}>

          <Text style={styles.totalScore}>Total Score: {
            this.state.total
            }{"\n"}{"\n"}</Text>

            <Text>45-56: Mostly independent and low risk of falling.{"\n"}</Text >
            <Text>41-44: Mostly independent but carries a significant risk of falling{"\n"}</Text>
            <Text>21-40: Patient may require assistance performing some of the tasks in general and ADL's. 100% fall risk.{"\n"}</Text>
            <Text>0-20:	Patient is wheelchair bound at the moment or may be in the future and carries a 100% fall risk{"\n"}</Text>

            {/* //close modal but not  */}
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setShowResultsVisible(!showResults)}>
              
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>          
          </View></Modal>
        </View>


    <View style={styles.container}>
      <Text style={{fontWeight: "bold", textAlign: "center", fontSize: 18}}>Berg Fuctional Balance</Text>
      
      <Text style={styles.title}> 1. Sit to Stand</Text>
    <Text style={{fontStyle: "italic"}} >Instruction: Please stand up. Try not to use your hands for support.</Text>
      <StatusBar style="auto" />  
    {/* /value depends on what is being clicked */}
      <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreOne', newValue)}value={this.state.berg.scoreOne}>
      <View>
        {/* <Text>(4) able to stand, no hands and stabilize indep</Text> */}
        <RadioButton.Item style={this.state.berg.scoreOne==="4" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(4) able to stand, no hands and stabilize indep" value="4" />
      </View>

      <View>
      <RadioButton.Item style={this.state.berg.scoreOne==="3" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(3) able to stand indep using hands" value="3" />        
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreOne==="2" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(2) able to stand using hands after several tries" value="2" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreOne==="1" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
         label="(1) needs min assist to stand or to stabilize" value="1" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreOne==="0" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(0) needs mod to max assist to stand" value="0" />   
      </View>
      </RadioButton.Group>


      
         <Text style={styles.title}>2. Standing unsupported</Text>
            <Text style={{fontStyle: "italic"}}>Instruction: Stand for two minutes without holding</Text>
            <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreTwo', newValue)}value={this.state.berg.scoreTwo}>
        <View>
            <RadioButton.Item style={this.state.berg.scoreTwo==="4" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(4) able to stand safely 2 min" value="4" />
        </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreTwo==="3" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(3) able to stand 2 min with supervision" value="3" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreTwo==="2" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(2)able to stand 30 sec unsupported" value="2" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreTwo==="1" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(1) needs several tries to stand 30 sec unsupported" value="1" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreTwo==="0" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(0) unable to stand 30 sec unassisted" value="0" />
      </View>
      </RadioButton.Group>

     
     
        <Text style={styles.title}>IF SUBJECT IS ABLE TO STAND 2 MINUTES SAFELY, SCORE FULL MARKS FOR SITTING
                    UNSUPPORTED. PROCEED TO POSITION CHANGE STANDING TO SITTING</Text>
                    <Text style={styles.title}>3. Sitting unsupported feet on floor.</Text>
            <Text style={{fontStyle: "italic"}}>Instruction: Sit with arms folded for 2 min</Text>
      <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreThree', newValue)}value={this.state.berg.scoreThree}>        
        <View>
        <RadioButton.Item style={this.state.berg.scoreThree==="4" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(4) able to sit safely and securely 2 min" value="4" />
        </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreThree==="3" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(3) able to sit 2 min under supervision" value="3" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreThree==="2" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
       label="(2) able to sit 30 sec" value="2" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreThree==="1" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
       label="(1) able to sit 10 sec" value="1" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreThree==="0" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(0) unable to sit w/o support 10 sec" value="0" /> 
      </View>
      </RadioButton.Group>

     
     
        <Text style={styles.title}>4. Standing to sitting.</Text>
           <Text style={{fontStyle: "italic"}}> Instruction: Please sit down.</Text>
           <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreFour', newValue)}value={this.state.berg.scoreFour}>
        <View>
        <RadioButton.Item style={this.state.berg.scoreFour==="4" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
         label="(4) sits safely with min use of hands" value="4" />
        </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreFour==="3" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(3) controls descent by using hands" value="3" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreFour==="2" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
       label="(2) uses back of legs against chair to control descent" value="2" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreFour==="1" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(1) sits indep but has uncontrolled descent" value="1" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreFour==="0" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(0) needs assist to sit"value="0" /> 
      </View>
      </RadioButton.Group>

      
    
        <Text style={styles.title}>5. Transfers</Text>
            <Text style={{fontStyle: "italic"}}>Instruction: Please move from chair or bed and back again. One way toward a seat with armrests and one way toward a seat without arm rest</Text>
            <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreFive', newValue)}value={this.state.berg.scoreFive}>
              <View>
              <RadioButton.Item style={this.state.berg.scoreFive==="4" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
         label="(4) able to transfer safely with min use of hands" value="4" />
         </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreFive==="3" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(3) able to transfer definite need of hands" value="3" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreFive==="2" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(2) able to transfer with VC and/or supervision" value="2" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreFive==="1" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(1) needs one person to assist" value="1" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreFive==="0" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(0) needs 2 people to assist or supervise to be safe" value="0" /> 
      </View>
      </RadioButton.Group>

      
     
        <Text style={styles.title}>6. Standing unsupported with eyes closed</Text>
            <Text style={{fontStyle: "italic"}}>Instruction: Close your eyes and stand still for 10 seconds.</Text>
            <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreSix', newValue)}value={this.state.berg.scoreSix}>
         <View>
         <RadioButton.Item style={this.state.berg.scoreSix==="4" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
            label="(4) able to stand 10 sec safely" value="4" />
       </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreSix==="3" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(3) able to stand 10 sec with supervision" value="3" />
      </View>      
      <View>
      <RadioButton.Item style={this.state.berg.scoreSix==="2" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(2) able to stand 3 sec" value="2" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreSix==="1" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
      label="(1) unable to keep eyes closed 3 sec but stays steady" value="1" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreSix==="0" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(0) needs 2 people to assist or supervise to be safe" value="0" />
      </View>
      </RadioButton.Group>
      
   
        <Text style={styles.title}>7. Standing unsupported with feet together.</Text>
           <Text style={{fontStyle: "italic"}}>Instruction: Place your feet together and stand without holding.</Text>
           <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreSeven', newValue)}value={this.state.berg.scoreSeven}>
        <View>
           <RadioButton.Item style={this.state.berg.scoreSeven==="4" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(4) place feet together indep and stand 1 min safely" value="4" />
        </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreSeven==="3" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(3) place feet together indep and stand 1 min with supervision" value="3" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreSeven==="2" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
       label="(2) feet together indep but unable to hold for 30 sec" value="2" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreSeven==="1" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(1) needs help to attain position; stand 15sec feet together" value="1" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreSeven==="0" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(0) needs help to attain position; unable to hold for 15sec" value="0" /> 
      </View>
      </RadioButton.Group>

      
      
        <Text style={{fontWeight: "bold", marginTop: 10 }}>THE FOLLOWING ITEMS ARE TO BE PERFORMED WHILE STANDING UNSUPPORTED.</Text>
         <Text style={styles.title}>8. Reaching forward with outstretched arms.</Text>
          <Text style={{fontStyle: "italic"}}>Instruction: Lift arm to 90 degrees. Stretch out your fingers and reach forward as far as you can.</Text>
          <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreEight', newValue)}value={this.state.berg.scoreEight}>
        <View><RadioButton.Item style={this.state.berg.scoreEight==="4" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(4) can reach forward confidently >10" value="4" />
        </View>
      <View>
        <RadioButton.Item style={this.state.berg.scoreEight==="3" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(3) can reach forward >5" value="3" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreEight==="2" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(2) reaches forward but needs supervision" value="2" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreEight==="1" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
       label="(1) reaches forward but needs supervision" value="1" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreEight==="0" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(0) Loses balance while trying/requires support" value="0" /> 
      </View>
      </RadioButton.Group>


      
    
        <Text style={styles.title}>9. Pick up object from the floor.</Text>
            <Text style={{fontStyle: "italic"}}>Instruction: Pick up the shoe/slipper which is placed in front of your feet.</Text>
            <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreNine', newValue)}value={this.state.berg.scoreNine}>
          <View>
          <RadioButton.Item style={this.state.berg.scoreNine==="4" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
            label="(4) able to pick up slipper safely and easily" value="4" />
        </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreNine==="3" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
       label="(3) able to pick up slipper but needs supervision" value="3" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreNine==="2" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(2) unable to pickup; reaches 1-2'' from slipper keeps balance indep" value="2" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreNine==="1" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(1) unable to pick up/needs supervision while trying" value="1" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreNine==="0" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(0) unable to try/needs assist to keep from falling" value="0" /> 
      </View>
      </RadioButton.Group>

      
    
        <Text style={styles.title}>10. Turning to look behind/over left and right shoulders.</Text>
            <Text style={{fontStyle: "italic"}}>Instruction:  Turn to look behind you over/toward your left shoulder. Repeat to the right</Text>
            <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreTen', newValue)}value={this.state.berg.scoreTen}>
         <View>
          <RadioButton.Item style={this.state.berg.scoreTen==="4" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
            label="(4) looks behind from both sides/weight shifts well" value="4" />
       </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreTen==="3" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(3) looks behind 1 side; other side shows less weight shift" value="3" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreTen==="2" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(2) turns sideways only but maintains balance" value="2" />
      </View>
      <View>
       <RadioButton.Item style={this.state.berg.scoreTen==="1" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write}   
       label="(1) needs supervision when turning" value="1" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreTen==="0" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
       label="(0) needs assist to keep from falling" value="0" /> 
      </View>
      </RadioButton.Group>


      
    
        <Text style={styles.title}>11. Turn 360 degrees</Text>
            <Text style={{fontStyle: "italic"}}>Instruction: Turn completely around in a full circle. Pause. Then turn a full circle in the other direction.</Text>
          <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreEleven', newValue)}value={this.state.berg.scoreEleven}>
            <View>
            <RadioButton.Item style={this.state.berg.scoreEleven==="4" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(4) able to place foot tandem indep and hold 30 sec" value="4" />
        </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreEleven==="3" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(3) able to place foot ahead of other indep/hold 30 sec" value="3" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreEleven==="2" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
      label="(2) able to take small step indep/hold 30 sec" value="2" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreEleven==="1" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(1) needs help to step but can hold 15 sec" value="1" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreEleven==="0" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(0) needs assistance to keep from falling/unable to try" value="0" /> 
      </View>
      </RadioButton.Group>


      
   
        <Text style={{fontWeight: "bold", marginTop: 10,}}> DYNAMIC WEIGHT SHIFTING WHILE STANDING UNSUPPORTED.</Text>
         <Text style={styles.title}>12.Count number of times step touch measured stoolInstruction: Place each foot alternately on the stool. Continue until each foot has touched the stool four times.</Text>
         <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreTwelve', newValue)}value={this.state.berg.scoreTwelve}>
           <View>
           <RadioButton.Item style={this.state.berg.scoreTwelve==="4" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
         label="(4) able to lift leg indep and hold >10 sec" value="4" />
         </View>
    
      <View>
      <RadioButton.Item style={this.state.berg.scoreTwelve==="3" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(3) able to lift leg indep and hold 5-10 sec" value="3" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreTwelve==="2" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(2) able to lift leg indep and hold = or >3 sec" value="2" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreTwelve==="1" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(1) tries to lift leg; unable to hold 3 sec/remains standing indep" value="1" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreTwelve==="0" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(0) unable to try or needs assist to prevent fall" value="0" />
      </View>
      </RadioButton.Group>

      
     
        <Text style={styles.title}>13. Standing unsupported, one foot in front </Text>
           <Text style={{fontStyle: "italic"}}> Instructions: (Demonstrate to subject) Place one foot directly in front of the other.
             If you feel that you cannot your foot directly in front, try to step far enough ahead that the heel 
             of your forward foot is ahead of the toes of the other foot.).</Text>
          <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreThirteen', newValue)}value={this.state.berg.scoreThirteen}>
            <View>
            <RadioButton.Item style={this.state.berg.scoreThirteen==="4" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(4) able to lift leg indep and hold >10 sec" value="4" />
        </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreThirteen==="3" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(3) able to lift leg indep and hold 5-10 sec" value="3" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreThirteen==="2" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(2) able to lift leg indep and hold = or >3 sec" value="2" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreThirteen==="1" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(1) tries to lift leg; unable to hold 3 sec/remains standing indep" value="1" />
      </View>
      <View>
        <RadioButton.Item style={this.state.berg.scoreThirteen==="0" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(0) unable to try or needs assist to prevent fall" value="0" />
      </View>
      </RadioButton.Group>


      

        <Text style={styles.title}>14.Standing on one leg</Text>
            <Text style={{fontStyle: "italic"}}>Instruction: Stand on one leg as long as you can without holding.</Text>
          <RadioButton.Group onValueChange={newValue => this.handleInputChange('scoreFourteen', newValue)}value={this.state.berg.scoreFourteen}>
            <View>
            <RadioButton.Item style={this.state.berg.scoreFourteen==="4" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(4) able to lift leg indep and hold >10 sec" value="4" />
        </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreFourteen==="3" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
       label="(3) able to lift leg indep and hold 5-10 sec" value="3" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreFourteen==="2" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(2) able to lift leg indep and hold = or >3 sec" value="2" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreFourteen==="1" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
        label="(1) tries to lift leg; unable to hold 3 sec/remains standing indep" value="1" />
      </View>
      <View>
      <RadioButton.Item style={this.state.berg.scoreFourteen==="0" ? styles.checkMarkPicked: styles.checkMark} color="#c2daff" labelStyle={styles.write} 
       label="(0) unable to try or needs assist to prevent fall" value="0" />
      </View>
      </RadioButton.Group>

      <View style={styles.submit} >
        <Button title="Submit" onPress={this.submit}/>
      </View>
      <View style={styles.clear}>
        <Button title="Clear" onPress={this.clear}/> 
        </View>

      <Text>Adapted from Berg, K., Wood-Dauphine, S.L. and Williams, J.L. Measuring balance in the elderly: validation of an instrument. Can. J. Public Health, 83(S2): S7-S11, 1992.)</Text>

     
    </View>
    </PaperProvider>
    </ScrollView>
    </SafeAreaView>
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    paddingRight: 10,
    paddingLeft: 10,
  },

  title: {
    fontWeight: "bold",
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },

  answer: {
    flex: 0.3,
    justifyContent: "space-between",
    borderWidth: 1,    
    margin: 1,  
    textAlign: "right", 
  },

  write: {  
    paddingLeft: 0,    
  },

  checkMark: {
    paddingRight: 2,  
    justifyContent: "space-between",
    borderWidth: 1,
    margin: 1,  
    borderRadius: 5, 
  },


  checkMarkPicked: {   
    paddingRight: 2,
    backgroundColor: "#c2daff", 
    justifyContent: "space-between",
    borderWidth: 1,
    margin: 1,  
    borderRadius: 5, 
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  totalScore: {
    fontSize: 18,
    fontWeight: "bold",
  },
  submit: {
    borderWidth: 1,
    borderRadius: 30,
    width: 170,
    marginTop: 10,
    marginLeft: 90,
  },
  clear: {    
    borderRadius: 30,
    width: 65,
    marginTop: 10,
    marginLeft: 145,
  }




 

  


});


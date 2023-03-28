import { View, Alert } from "react-native"
import { Text, Button, TextInput } from "@react-native-material/core"
import React, { useState } from "react"

const EmergancyPerson = () => {

    const [emgPerson, setemgName] = useState("");
    const [contact, setContact] = useState("");
    const [relation, setRelation] = useState("");

    const handleEmgPerson = () => {

        setemgName(emgPerson);
        setContact(contact);
        setRelation(relation);
        const details = {
            emgPerson: emgPerson,
            contact: contact,
            relation: relation
        }
         fetch("http://localhost:8080/api/save",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(details),
         })
         .then(()=>{
            "add new One"
         }).catch((error)=>{
            console.error(error);
         })
        //  alert(`Name: ${emgName}\nContact: ${contact}\nRelation: ${relation}`) 
        alert(JSON.stringify(details))
    }
    // const details=(emgName,contact,relation)=>{
    //    Alert.alert(`Name: ${emgName}\nContact: ${contact}\nRelation: ${relation}`,)
    // }

    return (
        <View>
            <View>
                <TextInput value={emgPerson} label="Emergancy person Name" variant="outlined" onChangeText={(text) => setemgName(text)}></TextInput>
                <TextInput value={contact} label="Emergancy Person contact number" variant="outlined" onChangeText={(text) => setContact(text)}></TextInput>
                <TextInput value={relation} label="Emergancy Person Relation" variant="outlined" onChangeText={(text) => setRelation(text)}></TextInput>

                <Button title="press" onPress={handleEmgPerson}></Button>

            </View>


        </View>
    )

}
export default EmergancyPerson;
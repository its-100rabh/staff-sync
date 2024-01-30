import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

const adddetails = () => {
  const [name, setName] = useState("");
  const [employeeID, setemployeeID] = useState("");
  const [dob, setdob] = useState("");
  const [mobileno, setmobileno] = useState("");
  const [joiningdate, setJoiningdate] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const handleAdd = () => {
    const employeeData = {
      employeeName: name,
      employeeId: employeeID,
      designation: designation,
      phoneNumber: mobileno,
      dateOfBirth: dob,
      joiningDate: joiningdate,
      activeEmployee: true,
      salary: salary,
      address: address,
    };

    axios
      .post("http://192.168.16.105:8081/addEmployee", employeeData)
      .then((response) => {
        Alert.alert(
          "Registration Successful",
          "You have been registered successfully."
        );
        setName("");
        setemployeeID("");
        setdob("");
        setmobileno("");
        setAddress("");
        setJoiningdate("");
        setDesignation("");
        setSalary("");
      })
      .catch((error) => {
        Alert.alert("Registration Failer", "An error occured.");
        console.log("Error:", error);
      });
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Add a New Employee
        </Text>

        <TextInput
          style={{
            padding: 10,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
          }}
          placeholder="India"
          placeholderTextColor={"gray"}
        />
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Full Name</Text>

          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Name"
            placeholderTextColor={"gray"}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Employee ID</Text>

          <TextInput
            value={employeeID}
            onChangeText={(text) => setemployeeID(text)}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Employee ID"
            placeholderTextColor={"gray"}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Designation</Text>

          <TextInput
            value={designation}
            onChangeText={(text) => setDesignation(text)}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Designation"
            placeholderTextColor={"gray"}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Mobile Number
          </Text>

          <TextInput
            value={mobileno}
            onChangeText={(text) => setmobileno(text)}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Mobile Number"
            placeholderTextColor={"gray"}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Date of Birth
          </Text>

          <TextInput
            value={dob}
            onChangeText={(text) => setdob(text)}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Date of Birth"
            placeholderTextColor={"gray"}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Joining Date</Text>

          <TextInput
            value={joiningdate}
            onChangeText={(text) => setJoiningdate(text)}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Joining Date"
            placeholderTextColor={"gray"}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text>Active Employee</Text>
          <Text>True</Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Salary</Text>

          <TextInput
            value={salary}
            onChangeText={(text) => setSalary(text)}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Salary"
            placeholderTextColor={"gray"}
          />
        </View>
        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Address</Text>

          <TextInput
            value={address}
            onChangeText={(text) => setAddress(text)}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Address"
            placeholderTextColor={"gray"}
          />
        </View>

        <Pressable
          onPress={handleAdd}
          style={{
            backgroundColor: "#abcaba",
            padding: 10,
            marginTop: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Add Employee</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default adddetails;

const styles = StyleSheet.create({});

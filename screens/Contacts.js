import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { fetchContacts } from "../utility/api";
import ContactListItem from "../components/ContactListItem";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";
const keyExtractor = ({ phone }) => phone;
const Contacts = ({ navigation }) => {
  const [contacts, setcontacts] = useEffect([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchContacts()
      .then((contacts) => {
        setcontacts(contacts);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setError(true);
      });
  }, []);
  const contactsSorted = contacts.sort((a, b) => a.name.localeCompare(b.name));
  const renderContact = ({ item }) => {
    const { name, avatar, phone } = item;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => navigation.navigate("Profile", { contact: item })}
      />
    );
    return (
      <View style={styles.container}>
        {loading && <ActivityIndicator color={"blue"} size={"large"} />}
        {error && <Text>Error....</Text>}
        {!loading && !error && (
          <FlatList
            data={contactsSorted}
            keyExtractor={keyExtractor}
            renderItem={renderContact}
          />
        )}
      </View>
    );
  };
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    flex: 1,
  },
});
export default contacts;

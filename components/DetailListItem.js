import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MateriaIcons";
import PropTypes from "prop-types";

import colors from "../utility/colors";
import iconSet from "@expo/vector-icons/build/Fontisto";

const DetailListItem = ({ icon, title, subtitle }) => {
  return (
    <View style={styles.borderContainer}>
      <View style={styles.wapper}>
        <View style={styles.container}>
          {icon && (
            <Icon
              name={icon}
              size={24}
              style={{ color: colors.black, marginRight: 20 }}
            />
          )}
          <View style={styles.contenContainer}>
            <Text style={[styles.title]}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailListItem;
DetailListItem.PropTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
const styles = StyleSheet.create({
  borderContainer: {
    paddingLeft: 24,
  },
  wapper: {
    flexDirection: "row",
    padding: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  contenContainer: {
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    color: colors.blue,
    fontSize: 15,
    marginTop: 4,
  },
});

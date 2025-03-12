import React from 'react';
import { IconGoast } from '@components/ComponentsImages';
import { RegularText } from '@components/Texts';
import { TEXTS, FONTS } from '@constants';
import { templateColors } from '@styles';
import {
    View,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';
const ModalErrorMessage = () => {
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity style={styles.modalError}>
        <IconGoast />
      </TouchableOpacity>
      <View>
        <RegularText textAdditionalStyle={styles.modalErrorText}>
          {TEXTS.SIGNUP.NOT_FIND_COUNTRY_NAME}
        </RegularText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    modalError: {
        backgroundColor: templateColors.gray200,
        padding: 24,
        borderRadius: 80,
        display:'flex',
        textAlign:'center',
      },
      modalErrorText:{
        textAlign:'center',
        fontSize:14,
        fontFamily:FONTS.regular,
        lineHeight:22,
        marginTop:16,
      },
      searchContainer:{
        alignItems: 'center',
      },
});

export default ModalErrorMessage;

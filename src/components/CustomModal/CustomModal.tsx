import React from 'react';
import { Modal, View, StyleSheet, TouchableWithoutFeedback, StatusBar, ScrollView, DimensionValue } from 'react-native';

interface CustomModalProps {
  visible: boolean;
  height: DimensionValue;
  children: React.ReactNode;
  onClose: () => void;
  animationType?: 'none' | 'slide' | 'fade';
}

const CustomModal: React.FC<CustomModalProps> = ({ visible, height, children, onClose, animationType }) => {
  return (
    <>
      {visible && <StatusBar hidden={true} />}
      <Modal
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
        animationType={animationType || 'slide'}
        statusBarTranslucent={true} // Ensure the modal covers the status bar
      >
        <View style={styles.overlay}>
          <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.overlayTouchable} />
          </TouchableWithoutFeedback>
          <View style={[styles.modalContainer, { height }]}>
            <ScrollView>
              {children}
            </ScrollView>
          </View>
        </View>
      </Modal>
      {visible && <StatusBar hidden={false} />}
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  overlayTouchable: {
    flex: 1,
  },
  modalContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});

export default CustomModal;

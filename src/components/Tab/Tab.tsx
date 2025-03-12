import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { LargeText, RegularText } from '../Texts';
import { IconChevronRight, OnOffButton, IconLink } from '@components/ComponentsImages';
import { profileStyles } from '@styles/profile';

interface TabProps {
  text: string;
  smallText?: string;
  icon?: React.ComponentType;
  isLinkExternal?: boolean;
  isNotificationPreference?: boolean;
  showChevron?: boolean; // New prop
  onPress: () => void;
}

const Tab: React.FC<TabProps> = ({
  text,
  smallText,
  icon: Icon,
  isLinkExternal,
  isNotificationPreference,
  showChevron = true,
  onPress,
}) => {
  return (
    <TouchableOpacity style={profileStyles.tabContainer} onPress={onPress}>
      <View style={profileStyles.leftIcons}>
        {Icon && <Icon />}
        <View style={profileStyles.texts}>
          <View style={Icon ? profileStyles.text : ''}>
            <LargeText>{text}</LargeText>
          </View>
          {smallText && (
            <RegularText textAdditionalStyle={profileStyles.smallText}>{smallText}</RegularText>
          )}
        </View>
      </View>
      <View>
        {isNotificationPreference ? (
          <OnOffButton />
        ) : isLinkExternal ? (
          <IconLink />
        ) : showChevron ? ( // Use the new prop here
          <IconChevronRight />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default Tab;

import React, { useState } from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { Tab } from '@components/Tab';
import { useNavigation } from '@react-navigation/native';
import { helpMeStyles } from '@styles/profile';
import { NavigationProps, ScreenNames } from '@navigation/navigationConfig';
import { StyledContainer } from '../StyledContainer';

// Define a type for the category keys
type CategoryKey = 'Using the App' | 'Partnerships' | 'Security & Privacy';

const HelpMeTabs = () => {
  const [activeTab, setActiveTab] = useState<CategoryKey>('Using the App');
  const navigation = useNavigation<NavigationProps>();

  const categories: Record<CategoryKey, string[]> = {
    'Using the App': [
      'How do I navigate the app?',
      'Can I use the app offline?',
    ],
    'Partnerships': [
      'How can I partner with you?',
      'What are the benefits of partnership?',
    ],
    'Security & Privacy': [
      'How is my data protected?',
      'What should I do if I notice suspicious activity?',
    ],
  };

  return (
    <StyledContainer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={helpMeStyles.tabHeader}>
        {Object.keys(categories).map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              helpMeStyles.tab,
              activeTab === category && helpMeStyles.activeTab,
            ]}
            onPress={() => setActiveTab(category as CategoryKey)}
          >
            <Text
              style={[
                helpMeStyles.tabText,
                activeTab === category && helpMeStyles.activeTabText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {categories[activeTab].map((question, index) => (
        <Tab
          key={index}
          text={question}
          onPress={() => navigation.navigate(ScreenNames.HelpMeAnswer)}
          showChevron={true}
        />
      ))}
    </StyledContainer>
  );
};

export default HelpMeTabs;
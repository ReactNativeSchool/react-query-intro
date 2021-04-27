import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  headerText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 32,
    marginBottom: 12,
  },
  subHeaderText: {
    color: colors.gray,
    fontSize: 20,
    marginBottom: 12,
    marginTop: -12, // assum this shows up under a headerText
  },
  defaultText: {
    color: colors.primary,
    fontSize: 18,
  },
});

export const Text = ({ type, children, style = {} }) => {
  const textStyles = [styles.defaultText];

  if (type === 'header') {
    textStyles.push(styles.headerText);
  } else if (type === 'subheader') {
    textStyles.push(styles.subHeaderText);
  }

  // TODO: Support object or array
  textStyles.push(style);

  return <RNText style={textStyles}>{children}</RNText>;
};

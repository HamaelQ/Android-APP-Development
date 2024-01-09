// PdfViewer.js

import React from 'react';
import { View, Text } from 'react-native';
import { PDFView } from 'react-native-pdf';

const PdfViewer = ({ route }) => {
  const { pdfTitle, pdfFileName } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>{pdfTitle}</Text>
      <PDFView
        source={{ uri: `bundle-assets://assets/${pdfFileName}` }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default PdfViewer;

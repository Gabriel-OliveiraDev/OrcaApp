import React, { ReactNode } from "react";
import { ScrollView, View } from "react-native";

interface ContainerProps {
  children: ReactNode
  backgroundColor: string
}

export function ScrollContainer({ children, backgroundColor }: ContainerProps) {
  return (
    <ScrollView
      keyboardShouldPersistTaps='handled'
      style={{ flex: 1, backgroundColor }}
    >
      {children}
    </ScrollView>
  );
};

export function ViewContainer({ backgroundColor, children }: ContainerProps) {
  return (
    <View style={{ flex: 1, backgroundColor }}>{children}</View>
  );
};
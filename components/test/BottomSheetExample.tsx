import { Button, Platform, Text, View } from 'react-native';
import { Sheet, useSheetRef } from '~/components/nativewindui/Sheet';

import { useColorScheme } from '~/lib/useColorScheme';

function BottomSheetExample() {
  const { colorScheme } = useColorScheme();
  const bottomSheetModalRef = useSheetRef();

  return (
    <View className="items-center">
      <Button
        color={colorScheme === 'dark' && Platform.OS === 'ios' ? 'white' : 'black'}
        title="Open Bottom Sheet"
        onPress={() => bottomSheetModalRef.current?.present()}
      />
      <Sheet ref={bottomSheetModalRef} snapPoints={[200]}>
        <View className="items-center justify-center flex-1 pb-8">
          <Text className="text-foreground">@gorhom/bottom-sheet 🎉</Text>
        </View>
      </Sheet>
    </View>
  );
}

export default BottomSheetExample;
import React, {FC, useCallback, useRef} from 'react';
import {FlatList, ViewToken, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {styles} from './AnimatedFlatList.styles';
import {AnimatedFlatListProps} from './AnimatedFlatList.types';

export const AnimatedFlatList: FC<AnimatedFlatListProps> = ({
  style,
  data,
  Item,
}) => {
  const viewableItemsSharedValue = useSharedValue<ViewToken[]>([]);

  const onListScroll = useCallback(({viewableItems: vItems}) => {
    if (vItems) {
      console.log({vItems});
      viewableItemsSharedValue.value = JSON.parse(JSON.stringify(vItems));
    }
  }, []);

  const viewabilityConfigCallbackPairs = useRef([
    {
      onViewableItemsChanged: onListScroll,
    },
  ]);

  return (
    <View style={[style, styles.wrapper]}>
      <FlatList
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}: {item: any}) => (
          <Item {...item} viewableItems={viewableItemsSharedValue} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'
import { DetailDesc, DetailsBid, FocusedStatusBar } from '../components'
import { CircleButton, RectButton } from '../components/Button'
import { SubInfo } from '../components/Info'
import { assets, SHADOWS, SIZES } from '../constants'

const DetailHeader = ({ data, navigation }) => {
  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image source={data.image} resizeMode="cover" style={{ width: "100%", height: "100%" }} />
      <CircleButton imgUrl={assets.left} handlePress={() => navigation.goBack()} top={StatusBar.currentHeight + 10} left={15} />
      <CircleButton imgUrl={assets.heart} top={StatusBar.currentHeight + 10} right={15} />
    </View>
  )
}

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
      <View style={{ width: "100%", position: "absolute", bottom: 0, paddingVertical: SIZES.font, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(255, 255, 255, .5)", zIndex: 1 }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <>
            <DetailHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{padding: SIZES.font}}>
              <DetailDesc data={data} />
            </View>
          </>
        )} />
    </SafeAreaView>
  )
}

export default Details
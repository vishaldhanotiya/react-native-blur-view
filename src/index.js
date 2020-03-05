import {BlurView} from '@react-native-community/blur';
import React, {useEffect} from 'react';
import {Dimensions, Platform, View} from 'react-native';
import BlurOverlay, {
  closeOverlay,
  openOverlay,
} from 'react-native-blur-overlay';

export default function blurView(props) {
  useEffect(() => {
    // alert(JSON.stringify(props.showHideView));
    if (props.showHideView == true) {
      openOverlay();
    } else if (props.showHideView == false) {
      closeOverlay();
    }
  }, [props.showHideView]);

  //render final view with main container
  const renderView = () => {
    return (
      <View style={{flex: 1}}>
        <BlurView
          style={{
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          blurType="light"
          blurAmount={3}
        />
        {props.renderView1}
        {/* <Text>{'helloxz,czxcmxz.cmz/xmczxmczxmc.zmxc.mfhfghghfghfgh.cmxzcmxzcm.xzmc.xzmc.,xzmc.xzmcxzc.mxzcmxzcmxzcmxz.cmxz.m'}</Text>
         */}
      </View>
    );
  };

  //render final view with main container

  if (Platform.OS === 'ios') {
    if (props.showHideView) {
      return (
        <View
          style={{
            flex: 1,

            position: 'absolute',
            zIndex: 1,
            height: '100%',
            width: '100%',
            justifyContent: 'flex-end',
          }}>
          {Platform.OS === 'ios' && renderView()}
        </View>
      );
    } else {
      return null;
    }
  } else {
    if (props.showHideView) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            position: 'absolute',
            zIndex: 1,

            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
            justifyContent: 'flex-end',
          }}>
          {Platform.OS === 'android' && (
            <BlurOverlay
              radius={9}
              downsampling={2}
              brightness={-5}
              onPress={() => {}}
              customStyles={{
                backgroundColor: 'rgba(255,255,255,0.4)',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              blurStyle="extraLight"
              children={props.renderView1}
            />
          )}
        </View>
      );
    } else {
      return null;
    }
  }
}

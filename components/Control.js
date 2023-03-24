// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// //We will deal with button here

// function Control({ isRunning, handleLeftButtonPress, handleRightButtonPress }) {
//     return (
//         <>
//             <TouchableOpacity
//                 style={[
//                     styles.controlButtonBorder,
//                     { backgroundColor: isRunning ? '#3333333' : '#1c1c1e' },
//                 ]}
//                 onPress={handleLeftButtonPress}
//             >

//                 <View style={style.controlButtonBorder}>
//                     <Text style={{ color: isRunning ? '#fff' : '#9d9ca2' }}>
//                         {isRunning ? 'Lap' : 'Reset'}
//                     </Text>
//                 </View>

//             </TouchableOpacity>

//             <TouchableOpacity
//                 style={style.controlButton}>
//                 <Text style={{ color: isRunning ? '#ea4c49' : '#37d05c' }}>
//                     {isRunning ? "stop" : "start"}
//                 </Text>

//             </TouchableOpacity>
//         </>
//     );
// };
// const CETER={
//     justifyContent: 'center',
//     allignments: 'center',
// };

// const style = StyleSheet.create({
//     controlButtonBorder:{
//         center ,
//         width: 65,
//         height: 65,
//         borderRadius: 65,
//         borderColor: "#000",
//         borderWidth: 1,
//     },
// });

// export default React.memo(Control );

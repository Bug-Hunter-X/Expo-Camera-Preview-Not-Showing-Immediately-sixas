import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(CameraType.back);
  const [cameraStatus, setCameraStatus] = React.useState('');

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraStatusChange = (status) => {
    setCameraStatus(status)
  }

  if (hasPermission === null) {
    return <View />; // Requesting permission
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      {cameraStatus === 'READY' && (
        <Camera style={{ flex: 1 }} type={type} onCameraReady={() => handleCameraStatusChange('READY')}>
          {/* Camera preview elements here */}
        </Camera>
      )}
      {cameraStatus !== 'READY' && <Text>Camera loading...</Text>}
    </View>
  );
};

export default CameraScreen;
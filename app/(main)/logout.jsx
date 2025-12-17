import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function Logout(){
  const router = useRouter();
  const Logout =async()=>{
    router.push('/signin');
  }
  
  return (
    <TouchableOpacity
      style={{ marginRight: 10 }}
      onPress={Logout}
    >
      <MaterialCommunityIcons name="logout" size={24} color="white" />
    </TouchableOpacity>
  );
};
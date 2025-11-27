import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateReportScreen from './src/CreateReport'; // ⬅️ Caminho correto para a sua estrutura

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateReport">
        <Stack.Screen 
          name="CreateReport" 
          component={CreateReportScreen} 
          options={{ title: 'Criar Relatório' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
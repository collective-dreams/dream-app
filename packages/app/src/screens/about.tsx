import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useRouter } from 'solito/router'

export function AboutScreen() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Dream App</Text>
      <Text style={styles.description}>
        This is a demonstration of the T3 Stack integrated with Solito v4 for
        cross-platform development.
      </Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1a1a1a',
  },
  description: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 26,
  },
  button: {
    backgroundColor: '#764ba2',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
})
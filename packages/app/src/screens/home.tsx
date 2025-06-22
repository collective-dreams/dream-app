import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/about',
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello from T3 + Solito v4! 🚀</Text>
      <Text style={styles.subtitle}>
        This is a unified React Native + Next.js app
      </Text>
      
      <TouchableOpacity style={styles.button} {...linkProps}>
        <Text style={styles.buttonText}>Go to About</Text>
      </TouchableOpacity>

      <View style={styles.features}>
        <Text style={styles.featureTitle}>Tech Stack:</Text>
        <Text style={styles.feature}>✅ Solito v4 - Unified navigation</Text>
        <Text style={styles.feature}>✅ T3 Stack - Type-safe backend</Text>
        <Text style={styles.feature}>✅ tRPC - End-to-end typesafety</Text>
        <Text style={styles.feature}>✅ Prisma - Type-safe database</Text>
        <Text style={styles.feature}>✅ Supabase - PostgreSQL & Auth</Text>
      </View>
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
    marginBottom: 10,
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#667eea',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  features: {
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: 400,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1a1a1a',
  },
  feature: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
})
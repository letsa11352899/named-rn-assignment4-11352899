import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import JobCardComponent from '../components/JobCardComponent';
import PopularJob from '../components/PopularJob';

export default function HomeScreen({ route }) {
  const { name, email } = route.params;

  const featuredJobs = [
    { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', image: require('../assets/facebook.png') },
    { id: '2', title: 'Research', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', image: require('../assets/google.png') },
    { id: '3', title: 'Study Time', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', image: require('../assets/s1.png') },
    { id: '4', title: 'AI study', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', image: require('../assets/AI.png') },
    { id: '5', title: 'Coding', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', image: require('../assets/coding1.png') },
    { id: '6', title: 'System Admin', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', image: require('../assets/s2.png') },
    { id: '7', title: 'Part Time Job', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', image: require('../assets/s3.png') },
  ];

  const popularJobs = [
    { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$95,000', location: 'Los Angeles, US', image: require('../assets/b.png') },
    { id: '2', title: 'Product Manager', company: 'Beats', salary: '$84,000', location: 'Florida, US', image: require('../assets/p.png') },
    { id: '3', title: 'Site Manager', company: 'Facebook', salary: '$86,000', location: 'Florida, US', image: require('../assets/fb.png') },
    { id: '4', title: 'App Executive', company: 'Google', salary: '$86,000', location: 'Florida, US', image: require('../assets/google.png') },
    { id: '5', title: 'School Administrator', company: 'Harvard', salary: '$86,000', location: 'Florida, US', image: require('../assets/school.png') },
    { id: '6', title: 'Government Official', company: 'Government', salary: '$86,000', location: 'Florida, US', image: require('../assets/gov.png') },
    { id: '7', title: 'Agricultural Officer', company: 'JE-FARM', salary: '$86,000', location: 'Florida, US', image: require('../assets/agric.png') },
    { id: '8', title: 'Hospital Admin', company: 'Hopital', salary: '$86,000', location: 'Florida, US', image: require('../assets/hos.png') },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
          <Text style={styles.header}>Mary Esinam Ahiakedzi {name}</Text>
          <Text style={styles.header}>meahiakedzi001@st.ug.edu.gh {name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search for jobs" 
          placeholderTextColor="#888" 
        />
        <TouchableOpacity style={styles.searchButton}>
          <Image source={require('../assets/Filter.png')} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <FlatList
        data={featuredJobs}
        renderItem={({ item }) => <JobCardComponent job={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.featuredJobsList}
      />

      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <FlatList
        data={popularJobs}
        renderItem={({ item }) => <PopularJob job={item} />}
        keyExtractor={(item) => item.id}
        style={styles.popularJobsList}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 20,
    marginVertical: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 10,

  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  searchButton: {
    marginLeft: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  featuredJobsList: {
    marginBottom: 20,
  },
  popularJobsList: {
    maxHeight: 400, // Set a max height for the popular jobs list
  },
});

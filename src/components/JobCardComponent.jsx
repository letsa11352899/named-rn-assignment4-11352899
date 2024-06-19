


import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function JobCardComponent({ job, large }) {
  return (
    <View style={[styles.card, large && styles.largeCard]}>
      <Image source={job.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.company}>{job.company}</Text>
        <Text style={styles.salary}>{job.salary}</Text>
        <Text style={styles.location}>{job.location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 3,
    alignItems: 'center',
    marginBottom: 10,
    width: 300, // Adjust width as needed for spacing and card size
  },
  largeCard: {
    width: 400,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25, // Assuming the image should be round
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  company: { fontSize: 16, color: '#555' },
  salary: { fontSize: 16, color: '#888' },
  location: { fontSize: 14, color: '#aaa' },
});

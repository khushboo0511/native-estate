import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({navigation}) => {
    const places = [
        {
            id: '1',
            name: 'Tata Value Homes',
            location: 'Oswal, Boisar, Mumbai',
            description: 'Tata Value Homes is a renowned real estate project.',
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Findian-modern-buildings&psig=AOvVaw2wMfqNN81C8uC9tMRU6d0Y&ust=1734756703865000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjWh7rGtYoDFQAAAAAdAAAAABAJ',
        },
        {
            id: '2',
            name: 'GP Complex',
            location: 'Juchandra, Naigaon, Mumbai',
            description: 'Sumptuous GP Complex is a luxurious project.',
            image: 'https://www.google.com/imgres?q=buildings%20india&imgurl=https%3A%2F%2Fimg.staticmb.com%2Fmbcontent%2Fimages%2Fcrop%2Fuploads%2F2022%2F12%2FOne_Avighna_park-tallest-building-in-India_0_1200.jpg&imgrefurl=https%3A%2F%2Fwww.magicbricks.com%2Fblog%2Ftallest-building-in-india%2F125104.html&docid=37NCW88rcf4iPM&tbnid=OR-MuRkW_IFRMM&vet=12ahUKEwjDuIO5xrWKAxUjhq8BHdPlDogQM3oECB0QAA..i&w=437&h=480&hcb=2&ved=2ahUKEwjDuIO5xrWKAxUjhq8BHdPlDogQM3oECB0QAA',
        },
    ];

    const renderPlace = ({ item }) => (
        <View style={styles.card}>

            
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardSubtitle}>{item.location}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>

             {/* Login/Sign Up Link at the Top */}
             <View style={styles.authLinkContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.authLink}>Login / Sign Up</Text>
                </TouchableOpacity>
            </View>

            {/* Header */}
            <Text style={styles.header}>Sai Prem Enterprises</Text>
            <Text style={styles.headerTitle}>Find your next <Text style={styles.highlight}>perfect</Text> place with ease</Text>
            <Text style={styles.headerSubtitle}>
                Sai Properties is the best place to find your next perfect place to live.
                We have a wide range of properties for you to choose from.
            </Text>
            <TouchableOpacity>
                <Text style={styles.cta}>Let's get started...</Text>
            </TouchableOpacity>

            {/* Recent Places */}
            <View style={styles.recentPlacesHeader}>
                <Text style={styles.recentPlacesTitle}>Recent places for rent</Text>
                <TouchableOpacity>
                    <Text style={styles.morePlacesLink}>Show more places for rent</Text>
                </TouchableOpacity>
            </View>

            {/* Property Cards */}
            <FlatList
                data={places}
                renderItem={renderPlace}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.flatList}
            />
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafb',
        padding: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    authLinkContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingVertical: 10,
    },
    authLink: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007bff',
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'gray',
        marginBottom: 10,
    },
    highlight: {
        color: '#007bff',
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
    },
    cta: {
        color: '#007bff',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 30,
    },
    recentPlacesHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    recentPlacesTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    morePlacesLink: {
        color: '#007bff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    flatList: {
        marginTop: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 10,
        width: 250,
        elevation: 3,
    },
    cardImage: {
        width: '100%',
        height: 140,
    },
    cardContent: {
        padding: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
    },
    cardDescription: {
        fontSize: 12,
        color: '#777',
    },
});

export default Home;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   ActivityIndicator,
// } from 'react-native';

// export default function Home() {
//   const [offerListings, setOfferListings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchListings = () => {
//     axios
//       .get('http://localhost:3000/api/listing/get?offer=false&limit=4')
//       .then((response) => {
//         setOfferListings(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching offer listings:', error);
//       });
//   };
  

//   useEffect(() => {
//     fetchListings();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#1e90ff" />
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Offer Listings</Text>
//       <FlatList
//         data={offerListings}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.listingItem}>
//             <Text style={styles.itemName}>{item.title}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f9f9f9',
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   listingItem: {
//     padding: 15,
//     backgroundColor: '#fff',
//     marginBottom: 10,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
// });

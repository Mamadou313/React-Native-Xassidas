import React, { useContext, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './WalletStyle'
import theme from '../../../Core/theme'
const { strings, icons, colors } = theme;
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Header from '../../../Components/Header';
import Context from '../../../Core/Context';

const card=[
    {id:0, name:'NDIAYE MAMADOU', amount:'640000'}
]
const cardDetail=[
    {id:0, day:'Mardi', date:'10- Avril,2022', name:'NDIAYE MAMADOU', amount:'1800', debit:true ,credit:false},
    {id:1, day:'Mardi', date:'9- Juin,2021', name:'NDIAYE MAMADOU', amount:'1800', debit:true ,credit:false},
    {id:2, day:'Mardi', date:'10- Septembre,2021', name:'NDIAYE MAMADOU', amount:'1800', debit:false ,credit:true},
    {id:3, day:'Mardi', date:'9- Septembre,2021', name:'NDIAYE MAMADOU', amount:'1800', debit:true ,credit:false},
    {id:4, day:'Mardi', date:'10 Octobre,2021', name:'NDIAYE MAMADOU', amount:'1800', debit:true ,credit:false},
    {id:5, day:'Mardi', date:'10 Decembre,2021', name:'NDIAYE MAMADOU', amount:'1800', debit:false ,credit:true},
    {id:6, day:'Mardi', date:'10 Decembre,2021', name:'NDIAYE MAMADOU', amount:'1800', debit:true ,credit:false},
    {id:7, day:'Mardi', date:'29 Decembre,2021', name:'NDIAYE MAMADOU', amount:'1800', debit:true ,credit:false},
    {id:8, day:'Mardi', date:'1 Janvier,2021', name:'NDIAYE MAMADOU', amount:'1800', debit:true ,credit:false},
    {id:9, day:'Lundi', date:'3 Janvier,2022', name:'NDIAYE MAMADOU', amount:'1800', debit:true ,credit:false},
]

const Wallet = (props) => {
    const nav= props.navigation
    const themeColor = useContext(Context)

    // useEffect(()=>{
        // console.log("Refresh page");
        // let sortCardDtail = cardDetail.sort((a, b) => (a.date > b.date) ? 1 : -1)
        // for(let i=0; i<sortCardDtail.length; i++){
        // console.log("SortedList->",cardDetail[i].date);
        // }
    // })
    const renderItem = ({item}) => {
        return(
         <View style={styles.listItemContainer}>
             <View style={styles.listItemView}>
                 <View style={styles.listView}>
                     <View style={{...styles.icon, backgroundColor:themeColor.theme}}>
                         <Icon name={item.credit? 'long-arrow-down': 'long-arrow-up'}  size={15} color='white' />
                     </View>
                     <View style={styles.nameView}>
                         <Text style={styles.Text}>{item.name}</Text>
                         <Text style={styles.date}>{item.date}</Text>
                     </View>
                 </View>
                 <View style={styles.debitView}>
                     <Text style={{...styles.debitText, color:item.credit?'green':'red'}}>{item.credit? '+': '-'  }{item.amount}</Text>
                 </View>
             </View>
         </View>
        )
     }
    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <Header title={strings.wallet} nav={nav} Screen='User'/>
            <View style={{...styles.cardContainer, backgroundColor:themeColor.theme}}>
            {card.map((item)=>{
                return(
                <View>
                    <View style={styles.cardView}>
                        <View style={styles.amountContainer}>
                            <Text style={[styles.amountText,styles.bold]}>{item.amount}</Text>
                            <Text style={styles.amountText}>PKR</Text>
                        </View>
                        <View><Image source={icons.cardchip}/></View>
                    </View>
                    <View style={styles.cardView}>
                        <Text style={styles.nameText}>{item.name}</Text>
                        <View><Image source={icons.cardcode}/></View>
                    </View>
                </View>
                
            )})}
            </View>
            <View style={styles.FlatList}>
                <Text style={[styles.recentTransText]}>{strings.recenttransaction.toLocaleUpperCase()}</Text>
                <Text style={styles.da}>Tuesday, 4- January 2022</Text>
                <FlatList
                    data={cardDetail}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}
export default Wallet
import React, {useState} from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import theme from '../Core/theme'
const { font } = theme;
import Text_Size_Type from './Font'

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
      return (
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        inputStyle={styles.searchText}
        selectionColor={'black'}
     />
    );
}
const styles = StyleSheet.create({
  searchText:{
    fontFamily:font.regular,
    fontSize:Text_Size_Type.Text_Type_5,
  }
});
export default SearchBar;

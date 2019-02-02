import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator,
 Image } from 'react-native'
import {getVideoFromApiWithSearchedText} from '../API/TMDBApi'
 class Teacher extends React.Component{

    constructor(props){
        super(props)
        this.state={
            courses:[],
            isCourseLoading:true,
        }
        this.teacher={}

    }

    _loadCourses(title){
        const vid=[]
        getVideoFromApiWithSearchedText(title).then(res=>{
            res.items.forEach(item=>{
              vid.push(res)
            })
           this.setState({courses:vid, isCourseLoading:true})

            console.log(vid)
         })
        console.log("_loadCoursesDATA ") 

    }
    _displayLoading() {
        if (this.state.isCourseLoading) {
            console.log("ActivityIndicator")
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size='large' />
            </View>
          )
        }
      }
    
      componentDidMount(){
         this._loadCourses(this.teacher.title)
        //this.setState({courses:cours, teacher:teacher})
      }
    render(){
         this.teacher=this.props.navigation.getParam('teacher')
        return(
            <View style={styles1.container}>
                <View  style={styles1.teacherInfo}>
                        <Image style={styles1.logo} source={this.teacher.imagePath} />
                        <Text style={styles1.paragraph}>{this.teacher.title}</Text>
                </View>
                <View style={styles1.teacherAudio}>
                <FlatList
                   data={this.state.courses}
                   ItemSeparatorComponent= {()=> <View style={{height:18.5, backgroundColor:'red'}}/> }
                   keyExtractor={({item})=>item.id.videoId}
                   renderItem={({item})=>
                      <View>
                        <Text>item.snippet.title</Text>
                      </View>
          
                     }
                 />
                {this._displayLoading()}
                </View>
            </View>

        )
    }
 
}

styles1=StyleSheet.create({
    container: {
        flex:1,
        //backgroundColor:'red',
       // alignItems: 'center',
        justifyContent: 'center',
       // padding: 24,
      },
      teacherInfo:{
            flex:1,
            flexDirection:'row',
      },
      teacherAudio:{
        flex:3.5,
        justifyContent:'center',
        alignItems:'center',
       // backgroundColor:'green'
     },
      paragraph: {
       // margin: 24,
       // marginTop: 60,
        flex:1,
        backgroundColor:'red',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right',
        justifyContent:'center',

      },
      logo: {
        height: 138,
        width: 138,
      },
      loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }

})
export default Teacher
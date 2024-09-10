const images = {
    image1 : require('../iconimages/backgroundimage1.png'),
    color1 : '#15E3FF',
    image2 : require('../iconimages/backgroundimage2.png'),
    color2 : "#50B480",
    image3 : require('../iconimages/backgroundimage3.png'),
    color3 : "#B8987F",
}

export const app =  [
    {id:1 , source1 : images.image1 , color1 : images.color1},
    {id:2 , source2 : images.image2 , color2 : images.color2},
    {id:3 , source3 : images.image3 , color3 : images.color3},
]

const schools = {
    schools1 : require('../iconimages/topschools1.png'),
    name1 : "Credence High School Dubai",
    schools2 : require('../iconimages/topschools2.png'),
    name2 : "Durham School",
    schools3 : require('../iconimages/topschools3.png'),
    name3 : "Durham School"
}

export const topschools = [
    {id : 1 , source : schools.schools1 ,text1 : schools.name1 },
    {id : 2 , source:schools.schools2 , text2 : schools.name2 },
    {id : 3 , source : schools.schools3 ,text3 : schools.name3 },
]

const topUniversity = {
    university1 : require('../iconimages/topuniversity1.png'),
    name1 : "Durham University",
    university2 : require('../iconimages/topuniversity2.png'),
    name2 : "Amity University Dubai",
    university3 : require('../iconimages/topuniversity3.png'),
    name3 : 'Credence High School Dubai',
}

export const UniversityData = [
    {id : 1 , source : topUniversity.university1 , text1 : topUniversity.name1},
    {id : 2 , source : topUniversity.university2 , text2 : topUniversity.name2},
    {id : 3 , source : topUniversity.university3 , text3 : topUniversity.name3} 
]
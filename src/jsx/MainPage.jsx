import styled from "styled-components";
import ControllBar from "./ControllBar";
import Button from "./Button";
import CategoryList from "./CategoryList";
import PostList from "./PostList";

import { db } from "../firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";

const Con = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
`

const Left = styled.div`
    height: 100vh;
    position: fixed;
`

const Right = styled.div`
    flex-direction: column;
    flex-grow: 1;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding-left: 72px;
    min-width: 1600px;
`

const PostCon = styled.div`
    padding: 72px 0px 172px 0px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
`
const HeadCon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 24px 0px 72px 0px;

  & > h1 {
    font-size: 48px;
    opacity: 0;
    animation: fadeIn 0.5s ease-in-out 0.2s forwards;
  }

  & > p {
    font-size: 24px;
    color: #666666;
    opacity: 0;
    animation: fadeIn 0.5s ease-in-out 0.4s forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
    from {
      opacity: 0;
      transform: translateX(100px);
    }
  }
`


const CategoryShow = styled.div`

    & > h1{
        font-size: 20px;
        color: #444444;
}
`

const CategoryCon = styled.div`
    width: 100%;
    display:flex;
    justify-content: flex-start;
    padding-bottom: 12px;
    flex-direction: column;
    gap: 12px;
`


function MainPage(props){
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('전체');
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(()=>{
        let tempData = []
        db.collection('post').get().then((qs)=>{
            qs.forEach((doc) => {
                tempData.push(doc.data())
            })
            setData(tempData)
        })
    },[]) // 마운트시에만 한번 데이터 호출, 글전체 가져오기.


    useEffect(() => {
        const result = data.filter((post) =>
          selectedCategory === '전체' ? true : post.category === selectedCategory
        );
        setFilteredPosts(result);
      }, [selectedCategory, data]);
    

    return(
        <Con>
            <Left>
        <ControllBar></ControllBar>
            </Left>
            <Right>
                <Banner></Banner>   
                <PostCon>
                    <HeadCon>
                        <h1>✦주절주절 블로그✦</h1>
                        <p>두서없이 생각 나는대로, 손 가는대로 적는 블로그</p>
                    </HeadCon>
                    <CategoryCon>
                        <CategoryShow>
                            <h1>{selectedCategory}<span style={{ padding:'0px 4px', color: '#FF0051', fontWeight: 'bold' }}>{filteredPosts.length}</span></h1>
                        </CategoryShow>
                        <CategoryList posts={data} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></CategoryList>
                    </CategoryCon>
                    <PostList posts={filteredPosts} itemClicked={(post)=>{navigate(`/post/${post.id}`)}} />
                </PostCon>
            </Right>
        </Con>
    )
}

export default MainPage
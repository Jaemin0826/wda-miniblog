import styled from "styled-components";
import CommentItem from "./CommentItem";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
`

const NoComment = styled.div`
    width: 100%;
    height: 320px;
    gap: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f8f8f8;
    border-radius: 12px;

    font-size: 16px;
    color: #888888;
    font-weight: 400;

    & > img {
        width: 180px;
    }
`

function CommentList(props){
    const{comments} = props

    const list = comments.map((comment, index)=> {
        return<CommentItem key={comment.id} comment={comment}></CommentItem>
    })

    if (!comments || comments.length === 0) {
        return (
            <StyledWrapper>
                <NoComment><img src="/empty.png"></img>댓글이 없습니다. 댓글을 입력해 주세요.</NoComment>
            </StyledWrapper>
        );
    }

    return(
        <StyledWrapper>
            {list}
        </StyledWrapper>
    )
}

export default CommentList
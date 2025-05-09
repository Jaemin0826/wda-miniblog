import styled from "styled-components";

const StyledCategory = styled.div`
  width: fit-content;
  min-width: 200px;
  padding: 12px 16px;
  border-bottom: 4px solid ${({ selected }) => (selected ? '#222222' : '#fff')};
  background-color: ${({ selected }) => (selected ? '#f3f3f3' : '#fff')};
  color: ${({ selected }) => (selected ? '#444444' : '#666666')};
  font-weight: bold;
  cursor: pointer;

  display:flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;

  i {
    margin-right: 4px;
  }

  &:hover{
    background-color: #eeeeee;
  }

  & > span{
    width:22px;
    height:22px;
    border-radius: 2px;
    background-color: ${({ selected }) => (selected ? '#d9d9d9' : '#d9d9d9')};
    color:${({ selected }) => (selected ? '#666666' : '#666666')};
    text-align: center;
    line-height: 22px;
  }
    
`

function CategoryItem(props) {

    const {categoryName, icon, selected, onClick, count} = props;

    return (
        <StyledCategory selected={selected} onClick={onClick}>
            <p>{icon}{categoryName}</p>
            <span>{count}</span>
        </StyledCategory>
    )
}

export default CategoryItem
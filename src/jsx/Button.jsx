import styled from 'styled-components'

const StyledButton = styled.button`
    width: fit-content; 
    background-color: ${({ disabled }) => (disabled ? '#d9d9d9' :'#222222')};
    padding: 8px 16px;
    color: white;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 16px;
    
    i {
        font-size: 16px;
    }

    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`

const DeleteButton = styled(StyledButton)`
    background-color: #FF2E1A;
    border: none;
`

function Button(props){
    const { title, onClick, icon, type, disabled } = props;

    const ButtonComponent = type === 'delete' ? DeleteButton : StyledButton;

    return (
        <ButtonComponent onClick={onClick} disabled={disabled}>
            {icon && <i className={icon}></i>}
            {title || '작성하기'}
        </ButtonComponent>
    );
}

export default Button;

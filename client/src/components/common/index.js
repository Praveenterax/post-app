import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';

export const Line = styled.div`
    margin: 10px auto;
    width: 95%;
    opacity: 0.4;
    border:1px solid #b5b4b1;
    /* border-left: 1px solid transparent;
    border-right:1px solid transparent; */
`;


export const SpinnerComponent = () => {
    return (
        <div className="spinner">
            <CircularProgress size={120} sx={{ position: 'absolute', top: '50%', left: '45%' }} />
        </div>
    );
};


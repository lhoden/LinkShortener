import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';
import './ShortenLink.css';

const ShortenLink = ({ inputValue }) => {
    const [shortenLink, setShortenLink] = useState('');
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
            setShortenLink(res.data.result.full_short_link);
        } catch (error) {

        } finally {

        }
    }

    useEffect(() => {
        if (inputValue.length) {
            fetchData();
        }
    }, [inputValue]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [copied]);

    return (
        <div className="result" style={inputValue.length ? {display: 'flex'} : {display: 'none'}}>
            <p style={{color: 'var(--secondary-text)', width: '45%', maxWidth: '46%', textOverflow: 'ellipsis'}}>{inputValue}</p>

            <p style={{color: 'var(--shortened-link)'}}>{shortenLink}</p>

            <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
                <Button 
                    variant="contained" 
                    style={copied ? {backgroundColor: 'var(--primary-background'} : {backgroundColor: 'var(--primary-button)'}} 
                    sx={{borderRadius: 50}} 
                    className={copied ? "copied" : ""}>
                        {copied ? "Copied!" : "Copy to Clipboard"}
                </Button>
            </CopyToClipboard>
        </div>
    )
} 

export default ShortenLink;
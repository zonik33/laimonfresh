import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

const auth_key = localStorage.getItem('auth_key');
const isAuthenticated = !!auth_key;

export default function SliderCodes() {
    const [profile, setProfile] = useState({ rows: [] });

    useEffect(() => {
        const fetchData = async () => {
            if (isAuthenticated) {
                try {
                    const response = await axios.get('https://promo.laimonfresh.ch/backend/api/getCodes', {
                        headers: {
                            'X-Auth-Token': auth_key
                        }
                    });
                    if (response.data.result) {
                        localStorage.setItem('profile', JSON.stringify(response.data.data));
                        setProfile(response.data.data);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            } else {
                console.log('No auth token found');
            }
        };

        fetchData();
    }, [isAuthenticated]);

    return (
        <Slider
            className='winnersSearchCodes'
            dots={false}
            infinite={false} // Отключить бесконечный скролл
            speed={0}
            slidesToShow={1}
            slidesToScroll={1}
        >
            {profile.rows && profile.rows.map(item => (
                <div key={item.id}>
                    <p className='slider-codes-winnersall'>{item.code}</p>
                </div>
            ))}
        </Slider>
    );
}
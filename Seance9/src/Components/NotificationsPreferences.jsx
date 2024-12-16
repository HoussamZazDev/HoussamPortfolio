import React, {useState} from 'react';

export default function NotificationsPreferences (){

    const [notificationMethod, setNotificationMethod] = useState('');

    const handleChange = (e) => {
        setNotificationMethod(e.target.value);
    }




    return(

        <div>
            <h3>Select your preferred notification method :</h3>
            <label >
                <input type="radio"
                        value="Email"
                        checked={notificationMethod === 'Email'}
                        onChange={handleChange}
                         />Email
            </label>
            <label >
                <input type="radio"
                        value="SMS"
                        checked={notificationMethod === 'SMS'}
                        onChange={handleChange}
                         />Email
            </label>

            <div>
                {notificationMethod === "Email" ? 
                (<p>You will recieve notifications via Email.</p>) : 
                notificationMethod === "SMS" ? (<p>You will receive notifications via SMS.</p>): 
                (<p>Please select a notification method.</p>)}
            </div>

          
        </div>

    )
}
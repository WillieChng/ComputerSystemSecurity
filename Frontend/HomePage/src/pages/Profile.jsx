import './Profile.css';

export default function Profile() {
    return (
        <div className='profile'>
            <h1>Profile</h1>
            <div className='profile-edit'>
                <div className='row'>
                    <label>Username</label>
                    <input type='text' className='input-box' />
                </div>
                <div className='row'>
                    <label>Email Address</label>
                    <input type='email' className='input-box' />
                </div>
                <div className='row'>
                    <label>Password</label>
                    <input type='password' className='input-box' />
                </div>
                <div className='row'>
                    <label>Re-enter Password</label>
                    <input type='password' className='input-box' />
                </div>
                <div className='buttons'>
                    <button className='edit-button'>Edit</button>
                    <button className='save-button'>Save</button>
                </div>
            </div>
        </div>
    );
}
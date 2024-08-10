import { RxAvatar } from 'react-icons/rx';
export const DOCTOR_PROFILE = [
    {
        avatar: <RxAvatar size={80} />,
        name: 'Dr. Divya Goyal',
        short_desc: 'DS, MDS - Conservative Dentistry & Endodontics',
        desc: 'Dr Divya Goyal is a principal dentist at The Dental Roots, Gurgaon, providing patients with treatment involving all aspects of dentistry including Single Sitting Root Canal, Cosmetic Dentistry, Dental Implants, Rehabilitative and General Dental Care',
        language: 'English',
        education: 'Grand Canyon University, 2019',
        fees: '500',
        hospitals: 'Manipal Hospital',
    },
];
export const invoices = [
    {
        invoice: '1',
        name: 'Alice Johnson',
        age: 25,
        gender: 'Male',
        paymentStatus: 'Completed',
        date: '2024-08-7',
        address: '0x0F284B92d59C8b59E11409495bE0c5e7dBe0dAf9',
    },
    {
        invoice: '2',
        name: 'Bob Frank',
        age: 35,
        gender: 'Male',
        paymentStatus: 'Pending',
        date: '2024-08-11',
        address: '0x2cac89ABf06DbE5d3a059517053B7144074e1CE5',
        zkProof: {
            leaves: [
                {
                    type: 'string',
                    name: 'name',
                    value: 'Bob Frank',
                    salt: '0x4ac3537a56ab85b3fcccb70c6e46be8cc78456ce48ad6f0ae1a0cc43b9a65fa6',
                },
                {
                    type: 'string',
                    name: 'diagnosis',
                    value: 'sdf',
                    salt: '0x0e53b2f2e407d81e73665ab29a87a2b419977f0a30062b266e322c48900c1367',
                },
                {
                    type: 'bool',
                    name: 'isInsured',
                    value: true,
                    salt: '0xd553655eb626a1115831c20d7d7aa388ad8dad54c6b35b87dae7ae7ff59de515',
                },
                {
                    type: 'uint256',
                    name: 'age',
                    value: '35',
                    salt: '0xb27374da6712c7187d11a1b8bd7fc1d57a4e1c2595e7301417871b2a9a4fe42b',
                },
            ],
            proof: [],
            proofFlags: [true, true, true],
        },
    },
    {
        invoice: '3',
        name: 'Bunny',
        age: 20,
        gender: 'Male',
        paymentStatus: 'Pending',
        date: '2024-08-15',
        address: '0x260f9FdfD971395634E92b3D574182befb63B33d',
        zkProof: {
            leaves: [
                {
                    type: 'bool',
                    name: 'isInsured',
                    value: true,
                    salt: '0x16764a1679d2f80be335bbf6d519edadeb9f64e35377ba9c1dfe14b59b34ade0',
                },
                {
                    type: 'string',
                    name: 'name',
                    value: 'Bunny',
                    salt: '0xda60df29401074feec3b8c37161d83b89c295f2e7b305695830e58a3ef4cf47c',
                },
                {
                    type: 'string',
                    name: 'diagnosis',
                    value: 'TB',
                    salt: '0x650948a00ac514d13872dedd998ef59c7a0511a899229f09ef83baddae8144b9',
                },
                {
                    type: 'uint256',
                    name: 'age',
                    value: '20',
                    salt: '0x3f5cedc2fb4b9b049c664e3c56af56396e6f617fd49b6a30870465b44cdea9c9',
                },
            ],
            proof: [],
            proofFlags: [true, true, true],
        },
    },
    {
        invoice: '4',
        name: 'Martin',
        age: 34,
        gender: 'Male',
        paymentStatus: 'Pending',
        date: '2024-08-21',
        address: '0x8a052Be15eC984320Ae940CBDCCCf8f97BeF1a09',
        zkProof: {
            leaves: [
                {
                    type: 'bool',
                    name: 'isInsured',
                    value: true,
                    salt: '0xfed472f44170c89dca4b5ba7ea7a0925f2138a32c505240bba246799908468ac',
                },
                {
                    type: 'string',
                    name: 'name',
                    value: 'Martin',
                    salt: '0xee0e88d9f98d5aae1697bab62688e9e2162ea8102185e54746387f2dedbcc260',
                },
                {
                    type: 'string',
                    name: 'diagnosis',
                    value: 'Sugar',
                    salt: '0x815ca78836f3434cdc1e045792e360f850e5738aa70fa43b1ee04523488f3ac4',
                },
                {
                    type: 'uint256',
                    name: 'age',
                    value: '34',
                    salt: '0x6ed840667af8f1b3079f4e3565866acd3a8d3beb81b5d4cb344d3be10d164d27',
                },
            ],
            proof: [],
            proofFlags: [true, true, true],
        },
    },
    {
        invoice: '5',
        name: 'Steve',
        age: 55,
        gender: 'Male',
        paymentStatus: 'Pending',
        date: '2024-08-22',
        address: '0xBb0Ad5E4AA60EE7393e7E51B5071B9b7DC5bbd44',
    },
    {
        invoice: '6',
        name: 'Roman',
        age: 66,
        gender: 'Male',
        paymentStatus: 'Pending',
        date: '2024-08-25',
        address: '0xEF8817ef9D776605dD2fF7ae87c7103915F0630f',
    },
    {
        invoice: '7',
        name: 'Dwane',
        age: 76,
        gender: 'Male',
        paymentStatus: 'Pending',
        date: '2024-08-28',
        address: '0x8a052Be15eC984320Ae940CBDCCCf8f97BeF1a09',
    },
];

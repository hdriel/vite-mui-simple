import { useState } from 'react';
import {
    // Accordion,
    Alert,
    AppBar,
    Avatar,
    Backdrop,
    Badge,
    BottomNavigation,
    Breadcrumbs,
    Button,
    ButtonGroup,
    Card,
    Checkbox,
    Chip,
    Dialog,
    DialogContentText,
    // Divider,
    Drawer,
    // Fab,
    TextField,
    InputAutocomplete,
    InputAutocompleteAsync,
    InputAutocompleteMultiple,
    InputAutocompleteMultipleAsync,
    InputColor,
    InputDate,
    InputDateTime,
    InputEmail,
    InputFile,
    InputNumber,
    InputPassword,
    InputPattern,
    InputPhone,
    InputSearch,
    InputText,
    InputTime,
    InputSelect,
    InputMultipleSelect,
    Link,
    LocalizationProvider,
    List,
    CheckList,
    DraggableList,
    Menu,
    ContextMenu,
    Pagination,
    Paper,
    // Popover,
    CircularProgress,
    LinearProgress,
    RadioButtonsGroup,
    Rating,
    RippleBox,
    Skeleton,
    Slider,
    RangeSlider,
    Snackbar,
    SpeedDial,
    // Stepper,
    // MobileStepper,
    // SVGIcon,
    Switch,
    Table,
    Tabs,
    Tab,
    Timeline,
    ToggleButtonGroup,
    ToggleButtonGroups,
    Tooltip,
    TreeView,
    Typography,
    Text,
    TextEllipsis,
} from 'mui-simple';

const App = () => {
    // State hooks for interactive components
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [backdropOpen, setBackdropOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null); // for Menu anchor
    const [bottomNavValue, setBottomNavValue] = useState('recents');
    const [currentTab, setCurrentTab] = useState(0);
    const [gender, setGender] = useState(''); // for RadioButtonsGroup
    const [snackbarOpen, setSnackbarOpen] = useState(true);

    // Sample data for Table component
    const tableColumns = [
        { label: 'Name', field: 'name' },
        { label: 'Age', field: 'age' },
    ];
    const tableData = [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 25 },
    ];

    // Grid container styles
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '16px',
    };

    return (
        // Wrap with LocalizationProvider for date/time components
        <LocalizationProvider adapterLocale="en-US" locale="en">
            <div style={gridStyle}>
                {/* Layout & Navigation Components */}
                <div style={{ gridColumn: '1fr' }}>
                    <AppBar position="static" style={{ padding: '8px' }}>
                        <Typography variant="h6">My AppBar</Typography>
                    </AppBar>
                </div>

                <div>
                    <Button variant="contained" onClick={() => setDrawerOpen(true)}>
                        Open Drawer
                    </Button>
                    <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                        <div style={{ width: '250px', padding: '16px' }}>Drawer Content</div>
                    </Drawer>
                </div>

                <div>
                    <BottomNavigation
                        value={bottomNavValue}
                        onChange={(_event, newValue) => setBottomNavValue(newValue as string)}
                        actions={[
                            { value: 'recents', label: 'Recents', icon: 'Restore' },
                            { value: 'favorites', label: 'Favorites', icon: 'Favorite' },
                            { value: 'nearby', label: 'Nearby', icon: 'LocationOn' },
                        ]}
                    />
                </div>

                <div>
                    <Breadcrumbs
                        aria-label="breadcrumb"
                        separator={'~'}
                        links={[
                            { label: 'Home', url: '/' },
                            { label: 'Catalog', url: '/' },
                            { label: 'Current Page', url: '/' },
                        ]}
                    />
                </div>

                <div>
                    <Menu
                        options={[{ label: 'Option 1' }, { label: 'Option 2' }]}
                        open={menuOpen}
                        anchorElementRef={anchorEl}
                        onClose={() => {
                            setMenuOpen(false);
                            return true; // ?
                        }}
                    >
                        <Button
                            onClick={(e) => {
                                setAnchorEl(e.currentTarget);
                                setMenuOpen(true);
                            }}
                        >
                            Open Menu
                        </Button>
                    </Menu>
                </div>

                <div>
                    <ContextMenu options={[{ label: 'Option A' }, { label: 'Option B' }]}>
                        <div
                            style={{
                                width: '100%',
                                height: '100px',
                                background: '#eee',
                                lineHeight: '100px',
                                textAlign: 'center',
                            }}
                        >
                            Right-click here
                        </div>
                    </ContextMenu>
                </div>

                <div>
                    <SpeedDial
                        ariaLabel="SpeedDial example"
                        actions={[
                            { icon: 'FileCopy', name: 'Copy' },
                            { icon: 'Save', name: 'Save' },
                            { icon: 'Print', name: 'Print' },
                        ]}
                        bottom={16}
                        right={16}
                    />
                </div>

                <div>
                    <Pagination totalPages={10} />
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                    {/* Tabs with two tabs */}
                    <Tabs value={currentTab} onChange={(tabId) => setCurrentTab(tabId as number)}>
                        <Tab label="Tab One" />
                        <Tab label="Tab Two" />
                    </Tabs>
                    {currentTab === 0 && <div style={{ padding: '8px' }}>Content for Tab One</div>}
                    {currentTab === 1 && <div style={{ padding: '8px' }}>Content for Tab Two</div>}
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                    <Button variant="contained" onClick={() => setDialogOpen(true)}>
                        Open Dialog
                    </Button>
                    <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} title="Dialog Title">
                        <DialogContentText>This is a dialog content.</DialogContentText>
                        <Button onClick={() => setDialogOpen(false)}>Close</Button>
                    </Dialog>
                </div>

                {/* Data Display Components */}
                <div style={{ gridColumn: 'span 2' }}>
                    <Table columns={tableColumns} data={tableData} title="Demo Table" />
                </div>

                <div>
                    <List
                        title="Nested List"
                        items={[
                            'Simple Item',
                            {
                                title: 'Expandable Item',
                                subtitle: 'Has children',
                                defaultExpanded: true,
                                items: ['Child 1', 'Child 2'],
                            },
                            'Another Item',
                        ]}
                    />
                </div>

                <div>
                    <CheckList title="Checklist" items={['Option 1', 'Option 2', 'Option 3']} />
                </div>

                <div>
                    <DraggableList
                        useDraggableContext
                        dataList={['Drag Item 1', 'Drag Item 2', 'Drag Item 3']}
                        renderValue={(item) => (
                            <div style={{ padding: '8px', background: '#fafafa' }}>{item as string}</div>
                        )}
                    />
                </div>

                <div>
                    <TreeView
                        nodes={[
                            { id: '1', label: 'Applications', children: [{ id: '2', label: 'Calendar' }] },
                            {
                                id: '5',
                                label: 'Documents',
                                children: [{ id: '6', label: 'MUI', children: [{ id: '8', label: 'index.js' }] }],
                            },
                        ]}
                        expandedIds={['1', '5']}
                    />
                </div>

                <div>
                    <Timeline
                        zigzag
                        steps={[
                            { title: 'Event 1', subtitle: 'First event', time: '09:00' },
                            { title: 'Event 2', subtitle: 'Second event', time: '10:00' },
                            { title: 'Event 3', subtitle: 'Third event', time: '11:00' },
                        ]}
                    />
                </div>

                <div>
                    <Card style={{ padding: '16px' }}>
                        <Typography>This is a card content.</Typography>
                    </Card>
                </div>

                <div>
                    <Paper elevation={3} style={{ padding: '16px' }}>
                        This is inside a Paper component.
                    </Paper>
                </div>

                <div>
                    <Avatar>HB</Avatar>
                </div>

                <div>
                    <Badge badgeContent={4} color="primary">
                        <Button>Mail</Button>
                    </Badge>
                </div>

                <div>
                    <Chip label="Chip Example" color="secondary" />
                </div>

                <div>
                    <Typography variant="h6">Heading Text</Typography>
                </div>

                <div>
                    <Text>This is regular text component.</Text>
                </div>

                <div>
                    <div style={{ width: '150px', position: 'relative' }}>
                        <TextEllipsis>Some very long text that will be truncated with an ellipsis.</TextEllipsis>
                    </div>
                </div>

                {/* Form & Input Components */}
                <div>
                    <Button variant="contained" color="primary">
                        Primary Button
                    </Button>
                </div>

                <div>
                    <ButtonGroup variant="outlined" color="secondary">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </div>

                <div>
                    <Switch defaultChecked /> <span>Switch Toggle</span>
                </div>

                <div>
                    <Checkbox defaultChecked /> <span>Checkbox</span>
                </div>

                <div>
                    <RadioButtonsGroup
                        label="Gender"
                        data={[
                            { label: 'Female', value: '0' },
                            { label: 'Male', value: '1' },
                            { label: 'Other', value: '2' },
                        ]}
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                </div>

                <div>
                    <ToggleButtonGroup
                        exclusive
                        data={[
                            { value: 'left', component: 'FormatAlignLeft' },
                            { value: 'center', component: 'FormatAlignCenter' },
                            { value: 'right', component: 'FormatAlignRight' },
                        ]}
                        value="left"
                    />
                </div>

                <div>
                    <ToggleButtonGroups>
                        <ToggleButtonGroup
                            exclusive
                            data={[
                                { value: 'bold', component: 'FormatBold' },
                                { value: 'italic', component: 'FormatItalic' },
                                { value: 'underlined', component: 'FormatUnderlined' },
                            ]}
                        />
                        <ToggleButtonGroup
                            data={[
                                { value: 'alignLeft', component: 'FormatAlignLeft' },
                                { value: 'alignCenter', component: 'FormatAlignCenter' },
                                { value: 'alignRight', component: 'FormatAlignRight' },
                            ]}
                        />
                    </ToggleButtonGroups>
                </div>

                <div>
                    <Slider defaultValue={30} />
                </div>

                <div>
                    <RangeSlider defaultValue={[20, 50]} />
                </div>

                <div>
                    <Rating defaultValue={3} SCORE_LABELS={{ 0: 'low', 5: 'high' }} />
                </div>

                <div>
                    <TextField label="Standard" />
                </div>

                <div>
                    <InputText label="Text Input" />
                </div>

                <div>
                    <InputNumber label="Number Input" defaultValue={42} />
                </div>

                <div>
                    <InputSearch label="Search" placeholder="Search..." />
                </div>

                <div>
                    <InputEmail label="Email" placeholder="name@example.com" />
                </div>

                <div>
                    <InputPassword label="Password" />
                </div>

                <div>
                    <InputPhone label="Phone" />
                </div>

                <div>
                    <InputPattern label="Pattern (digits only)" pattern="^[0-9]+$" helperText="Digits only" />
                </div>

                <div>
                    <InputColor label="Color Picker" />
                </div>

                <div>
                    <InputDate label="Date" />
                </div>

                <div>
                    <InputTime label="Time" />
                </div>

                <div>
                    <InputDateTime label="Date & Time" />
                </div>

                <div>
                    <InputSelect
                        label="Select"
                        options={[
                            { label: 'Option A', value: 'A' },
                            { label: 'Option B', value: 'B' },
                        ]}
                    />
                </div>

                <div>
                    <InputMultipleSelect
                        label="Multiple Select"
                        options={[
                            { label: 'Option A', value: 'A' },
                            { label: 'Option B', value: 'B' },
                            { label: 'Option C', value: 'C' },
                        ]}
                    />
                </div>

                <div>
                    <InputAutocomplete label="Autocomplete" options={['Option 1', 'Option 2', 'Option 3']} />
                </div>

                <div>
                    <InputAutocompleteAsync
                        label="Async Autocomplete"
                        fetchOptionsOnFocus
                        getOptionsPromise={async () => ['Option 1', 'Option 2', 'Option 3']}
                    />
                </div>

                <div>
                    <InputAutocompleteMultiple label="Multi Autocomplete" options={['One', 'Two', 'Three']} />
                </div>

                <div>
                    <InputAutocompleteMultipleAsync
                        label="Async Multi Autocomplete"
                        fetchOptionsOnFocus
                        getOptionsPromise={async () => ['Option A', 'Option B', 'Option C']}
                    />
                </div>

                <div>
                    <InputFile>Choose File</InputFile>
                </div>

                {/* Feedback & Misc Components */}
                <div>
                    <Alert severity="info">This is an info alert</Alert>
                </div>

                <div>
                    <Tooltip title="Tooltip text">
                        <Button>Hover me</Button>
                    </Tooltip>
                </div>

                <div>
                    <Button variant="outlined" onClick={() => setBackdropOpen(true)}>
                        Show Backdrop
                    </Button>
                    <Backdrop open={backdropOpen} onClick={() => setBackdropOpen(false)}>
                        <CircularProgress />
                    </Backdrop>
                </div>

                <div>
                    <Snackbar
                        open={snackbarOpen}
                        message="This is a snackbar notification"
                        autoHideDuration={5}
                        onClose={() => setSnackbarOpen(false)}
                    />
                    <Button onClick={() => setSnackbarOpen(true)}> open snackbar</Button>
                </div>

                <div>
                    <CircularProgress />
                </div>

                <div>
                    <LinearProgress />
                </div>

                <div>
                    <Skeleton variant="rectangular" width={210} height={60} />
                </div>

                <div>
                    <RippleBox color="primary" style={{ display: 'inline-block', padding: '20px', background: '#ccc' }}>
                        Click me
                    </RippleBox>
                </div>
            </div>
        </LocalizationProvider>
    );
};

export default App;

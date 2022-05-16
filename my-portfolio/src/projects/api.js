{
    data.data.map((image, i) => (
        (i % 2 === 0) ? (
            <Fade key={i} bottom distance="30%">

                <Grid container mb={{ xs: 6, md: 10 }} rowSpacing={{ sx: 2, md: 10 }}>

                    <Grid item xs={12} md={7} order={{ xs: 1 }}>

                        <ImageComponent image={image} />

                    </Grid>
                    <Grid item xs={12} md={5} order={{ xs: 2 }} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <Paper elevation={hideTabs ? 3 : 0} sx={{ zIndex: 999, width: '100%' }}>

                            <Typography color='primary' align={!hideTabs ? 'right' : 'left'} sx={{ m: .5 }} variant="h6">
                                {image.title}
                            </Typography>
                            <StyledPaper elevation={!hideTabs ? 3 : 0} className={i % 2 ? 'left' : 'right'} >

                                <Typography color='primary.dark' variant="body2">
                                    {image.description}
                                </Typography>


                            </StyledPaper>

                            <Box className="align-text" sx={{ width: '100%' }}>
                                <Typography sx={{ width: '100%', px: 1 }} variant="caption" color="primary.dark" align={!hideTabs ? 'right' : 'left'} >
                                    {image.tech.map((tech, i) => (
                                        <span key={i}>{tech}, </span>
                                    ))}
                                </Typography>
                            </Box>
                            <Stack justifyContent={!hideTabs ? 'flex-end' : 'flex-start'} direction="row" spacing={1}>
                                <ProjectIcons github={image.github} url={image.url} />
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Fade>

        ) : (
            <Fade key={i} bottom distance="30%">
                <Grid container mb={{ xs: 6, md: 10 }} rowSpacing={{ sx: 2, md: 10 }}>
                    <Grid item xs={12} md={7} order={{ xs: 1, md: 2 }}>
                        <ImageComponent image={image} />

                    </Grid>
                    <Grid item xs={12} md={5} order={{ xs: 2, md: 1 }} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <Paper elevation={hideTabs ? 3 : 0} sx={{ zIndex: 999, width: '100%' }}>

                            <Typography color='primary' sx={{ m: .5 }} variant="h6">
                                {image.title}
                            </Typography>
                            <StyledPaper elevation={!hideTabs ? 3 : 0} className={i % 2 ? 'left' : 'right'}>

                                <Typography color='primary.dark' variant="body2">
                                    {image.description}
                                </Typography>

                            </StyledPaper >
                            <Typography sx={{ width: '100%', px: 1 }} variant="caption" color="primary.dark" align={!hideTabs ? 'right' : 'left'} >
                                {image.tech.map((tech, i) => (
                                    <span key={i}>{tech}, </span>
                                ))}
                            </Typography>

                            <ProjectIcons github={image.github} url={image.url} />

                        </Paper>
                    </Grid>
                </Grid>
            </Fade>
        )
    ))
}

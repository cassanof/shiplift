(function() {var implementors = {};
implementors["shiplift"] = [{"text":"impl Send for RegistryAuth","synthetic":true,"types":[]},{"text":"impl Send for RegistryAuthBuilder","synthetic":true,"types":[]},{"text":"impl Send for TagOptions","synthetic":true,"types":[]},{"text":"impl Send for TagOptionsBuilder","synthetic":true,"types":[]},{"text":"impl Send for PullOptions","synthetic":true,"types":[]},{"text":"impl Send for PullOptionsBuilder","synthetic":true,"types":[]},{"text":"impl Send for BuildOptions","synthetic":true,"types":[]},{"text":"impl Send for BuildOptionsBuilder","synthetic":true,"types":[]},{"text":"impl Send for ContainerListOptions","synthetic":true,"types":[]},{"text":"impl Send for ContainerFilter","synthetic":true,"types":[]},{"text":"impl Send for ContainerListOptionsBuilder","synthetic":true,"types":[]},{"text":"impl Send for ContainerOptions","synthetic":true,"types":[]},{"text":"impl Send for ContainerOptionsBuilder","synthetic":true,"types":[]},{"text":"impl Send for ExecContainerOptions","synthetic":true,"types":[]},{"text":"impl Send for ExecContainerOptionsBuilder","synthetic":true,"types":[]},{"text":"impl Send for EventsOptions","synthetic":true,"types":[]},{"text":"impl Send for EventFilterType","synthetic":true,"types":[]},{"text":"impl Send for EventFilter","synthetic":true,"types":[]},{"text":"impl Send for EventsOptionsBuilder","synthetic":true,"types":[]},{"text":"impl Send for LogsOptions","synthetic":true,"types":[]},{"text":"impl Send for LogsOptionsBuilder","synthetic":true,"types":[]},{"text":"impl Send for ImageFilter","synthetic":true,"types":[]},{"text":"impl Send for ImageListOptions","synthetic":true,"types":[]},{"text":"impl Send for ImageListOptionsBuilder","synthetic":true,"types":[]},{"text":"impl Send for RmContainerOptions","synthetic":true,"types":[]},{"text":"impl Send for RmContainerOptionsBuilder","synthetic":true,"types":[]},{"text":"impl Send for NetworkListOptions","synthetic":true,"types":[]},{"text":"impl Send for NetworkCreateOptions","synthetic":true,"types":[]},{"text":"impl Send for NetworkCreateOptionsBuilder","synthetic":true,"types":[]},{"text":"impl Send for ContainerConnectionOptions","synthetic":true,"types":[]},{"text":"impl Send for ContainerConnectionOptionsBuilder","synthetic":true,"types":[]},{"text":"impl Send for VolumeCreateOptions","synthetic":true,"types":[]},{"text":"impl Send for VolumeCreateOptionsBuilder","synthetic":true,"types":[]},{"text":"impl Send for ExecResizeOptions","synthetic":true,"types":[]},{"text":"impl Send for ExecResizeOptionsBuilder","synthetic":true,"types":[]},{"text":"impl Send for ServiceListOptions","synthetic":true,"types":[]},{"text":"impl Send for ServiceFilter","synthetic":true,"types":[]},{"text":"impl Send for ServiceListOptionsBuilder","synthetic":true,"types":[]},{"text":"impl Send for ServiceOptions","synthetic":true,"types":[]},{"text":"impl Send for ServiceOptionsBuilder","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for SearchResult","synthetic":true,"types":[]},{"text":"impl Send for Image","synthetic":true,"types":[]},{"text":"impl Send for ImageDetails","synthetic":true,"types":[]},{"text":"impl Send for Container","synthetic":true,"types":[]},{"text":"impl Send for ContainerDetails","synthetic":true,"types":[]},{"text":"impl Send for Mount","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for NetworkSettings","synthetic":true,"types":[]},{"text":"impl Send for NetworkEntry","synthetic":true,"types":[]},{"text":"impl Send for HostConfig","synthetic":true,"types":[]},{"text":"impl Send for Config","synthetic":true,"types":[]},{"text":"impl Send for Port","synthetic":true,"types":[]},{"text":"impl Send for Stats","synthetic":true,"types":[]},{"text":"impl Send for Network","synthetic":true,"types":[]},{"text":"impl Send for IPAM","synthetic":true,"types":[]},{"text":"impl Send for NetworkDetails","synthetic":true,"types":[]},{"text":"impl Send for NetworkContainerDetails","synthetic":true,"types":[]},{"text":"impl Send for NetworkCreateInfo","synthetic":true,"types":[]},{"text":"impl Send for MemoryStats","synthetic":true,"types":[]},{"text":"impl Send for MemoryStat","synthetic":true,"types":[]},{"text":"impl Send for CpuStats","synthetic":true,"types":[]},{"text":"impl Send for CpuUsage","synthetic":true,"types":[]},{"text":"impl Send for ThrottlingData","synthetic":true,"types":[]},{"text":"impl Send for BlkioStats","synthetic":true,"types":[]},{"text":"impl Send for BlkioStat","synthetic":true,"types":[]},{"text":"impl Send for Change","synthetic":true,"types":[]},{"text":"impl Send for Top","synthetic":true,"types":[]},{"text":"impl Send for Version","synthetic":true,"types":[]},{"text":"impl Send for Info","synthetic":true,"types":[]},{"text":"impl Send for ContainerCreateInfo","synthetic":true,"types":[]},{"text":"impl Send for History","synthetic":true,"types":[]},{"text":"impl Send for Exit","synthetic":true,"types":[]},{"text":"impl Send for Event","synthetic":true,"types":[]},{"text":"impl Send for ExecDetails","synthetic":true,"types":[]},{"text":"impl Send for ProcessConfig","synthetic":true,"types":[]},{"text":"impl Send for Actor","synthetic":true,"types":[]},{"text":"impl Send for Status","synthetic":true,"types":[]},{"text":"impl Send for VolumeCreateInfo","synthetic":true,"types":[]},{"text":"impl Send for Volumes","synthetic":true,"types":[]},{"text":"impl Send for Volume","synthetic":true,"types":[]},{"text":"impl Send for Service","synthetic":true,"types":[]},{"text":"impl Send for ObjectVersion","synthetic":true,"types":[]},{"text":"impl Send for Endpoint","synthetic":true,"types":[]},{"text":"impl Send for EndpointSpec","synthetic":true,"types":[]},{"text":"impl Send for EndpointPortConfig","synthetic":true,"types":[]},{"text":"impl Send for UpdateStatus","synthetic":true,"types":[]},{"text":"impl Send for ServiceStatus","synthetic":true,"types":[]},{"text":"impl Send for JobStatus","synthetic":true,"types":[]},{"text":"impl Send for ServiceDetails","synthetic":true,"types":[]},{"text":"impl Send for ServiceSpec","synthetic":true,"types":[]},{"text":"impl Send for TaskSpec","synthetic":true,"types":[]},{"text":"impl Send for Mode","synthetic":true,"types":[]},{"text":"impl Send for Replicated","synthetic":true,"types":[]},{"text":"impl Send for ReplicatedJob","synthetic":true,"types":[]},{"text":"impl Send for UpdateConfig","synthetic":true,"types":[]},{"text":"impl Send for NetworkAttachmentConfig","synthetic":true,"types":[]},{"text":"impl Send for ServiceCreateInfo","synthetic":true,"types":[]},{"text":"impl Send for Transport","synthetic":true,"types":[]},{"text":"impl Send for TtyChunk","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Multiplexer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Docker","synthetic":true,"types":[]},{"text":"impl&lt;'docker&gt; Send for Image&lt;'docker&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'docker&gt; Send for Images&lt;'docker&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'docker&gt; Send for Container&lt;'docker&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'docker&gt; Send for Containers&lt;'docker&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'docker&gt; Send for Exec&lt;'docker&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'docker&gt; Send for Networks&lt;'docker&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'docker&gt; Send for Network&lt;'docker&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'docker&gt; Send for Volumes&lt;'docker&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'docker&gt; Send for Volume&lt;'docker&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'docker&gt; Send for Services&lt;'docker&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'docker&gt; Send for Service&lt;'docker&gt;","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()